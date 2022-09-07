import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
import { EmployeeService } from "./employee/employee.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const employeeService = app.get(EmployeeService);
  await employeeService.seedData();

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
