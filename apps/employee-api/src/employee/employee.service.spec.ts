import { Test } from "@nestjs/testing";
import { EmployeeService } from "./employee.service";
import { InMemoryDBModule, InMemoryDBService } from "@nestjs-addons/in-memory-db";
import { EmployeeEntity } from "../database/entities/employee.entity";
import { pick } from "next/dist/lib/pick";

describe("EmployeeService", () => {
  let service: EmployeeService;
  let employeeRepo: InMemoryDBService<EmployeeEntity>;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [InMemoryDBModule.forFeature("employee")],
      providers: [EmployeeService],
    }).compile();

    service = app.get<EmployeeService>(EmployeeService);
    employeeRepo = app.get<InMemoryDBService<EmployeeEntity>>(InMemoryDBService<EmployeeEntity>);

    const ids = employeeRepo.getAll().map((employee) => employee.id);
    employeeRepo.deleteMany(ids);
  });

  it("can seed data", async () => {
    await service.seedData();
    expect(employeeRepo.getAll().length).toEqual(12);
  });

  it("can return employee detail", async () => {
    await service.seedData();
    const employee = await service.getEmployee("1");
    expect(employee.first_name).toEqual("Henri");
  });

  it("can return employee list", async () => {
    await service.seedData();
    const employees = await service.getListOfEmployee();
    expect(employees.length).toEqual(12);
  });

  it("can create new employee", async () => {
    await service.createEmployee({
      first_name: "Ken",
      last_name: "Nguyen",
      email: "nln.vn.it@gmail.com",
      phone: "+84905096771",
      gender: "M",
      photo: "www.google.com",
    });
    expect(employeeRepo.getAll().length).toEqual(1);
  });

  it("can update employee data", async () => {
    await service.seedData();
    const pickedEmployee = employeeRepo.get("1");
    pickedEmployee.first_name = "Ken";
    pickedEmployee.last_name = "Nguyen";
    await service.updateEmployee(pickedEmployee);

    const employeeWithNewDataInDb = employeeRepo.get("1");
    expect(employeeWithNewDataInDb.first_name).toEqual("Ken");
    expect(employeeWithNewDataInDb.last_name).toEqual("Nguyen");
  });

  it("can delete employee", async () => {
    await service.seedData();
    await service.deleteEmployee("1");
    expect(employeeRepo.getAll().length).toEqual(11);
  });
});
