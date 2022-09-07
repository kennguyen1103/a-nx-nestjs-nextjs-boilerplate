import { Module } from "@nestjs/common";
import { InMemoryDBModule } from "@nestjs-addons/in-memory-db";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";

@Module({
  imports: [InMemoryDBModule.forFeature("employee")],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
