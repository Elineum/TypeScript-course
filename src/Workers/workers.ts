import { IDepartment } from "../Departments/interfaces/departments.interface";
import {
  EEmployeeStatus,
  IEmployee,
  ITrainee,
  IWorker,
} from "./interfaces/workers.interface";

abstract class Worker implements IWorker {
  constructor(
    public name: string,
    public surname: string,
    public salary: number,
    public bankBill: bigint
  ) {}

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

export class Trainee extends Worker implements ITrainee {}

export class Employee extends Worker implements IEmployee {
  public inDepartment: IDepartment | null = null;

  constructor(
    name: string,
    surname: string,
    salary: number,
    bankBill: bigint,
    public status: EEmployeeStatus
  ) {
    super(name, surname, salary, bankBill);
  }
}
