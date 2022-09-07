import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { EmployeeEntity } from "../database/entities/employee.entity";

@Controller("employee")
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  async getListOfEmployee() {
    return this.employeeService.getListOfEmployee();
  }

  @Get(":id")
  async getEmployeeDetail(@Param() params) {
    return this.employeeService.getEmployee(params.id);
  }

  @Post()
  async createEmployee(@Body() params: Partial<EmployeeEntity>) {
    return this.employeeService.createEmployee(params);
  }

  @Patch()
  async updateEmployee(@Body() params: EmployeeEntity) {
    return this.employeeService.updateEmployee(params);
  }

  @Delete(":id")
  async deleteEmployee(@Param() params) {
    return this.employeeService.deleteEmployee(params.id);
  }
}
