import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export interface EmployeeEntity extends InMemoryDBEntity {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}
