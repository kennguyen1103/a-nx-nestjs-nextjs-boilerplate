import { Injectable } from "@nestjs/common";
import { InMemoryDBService } from "@nestjs-addons/in-memory-db";
import { EmployeeEntity } from "../database/entities/employee.entity";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const seededData = require("./employees.json");

@Injectable()
export class EmployeeService {
  constructor(private employeeRepo: InMemoryDBService<EmployeeEntity>) {}

  async seedData() {
    const seedingPromises = seededData.map((employee) => this.employeeRepo.create(employee));
    return Promise.all(seedingPromises);
  }

  async createEmployee(params: Partial<EmployeeEntity>) {
    return this.employeeRepo.create(params);
  }

  async updateEmployee(params: EmployeeEntity) {
    return this.employeeRepo.update(params);
  }

  async deleteEmployee(id: string) {
    return this.employeeRepo.delete(id);
  }

  async getEmployee(id: string) {
    return this.employeeRepo.get(id);
  }

  async getListOfEmployee() {
    return this.employeeRepo.getAll();
  }
}
