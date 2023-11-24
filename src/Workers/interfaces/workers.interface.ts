import { IDepartment } from "../../Departments/interfaces/departments.interface";

export enum EEmployeeStatus {
  Active = "active",
  Unactive = "unactive",
  OnVacation = "onVacation",
}

export interface IWorker {
  name: string;
  surname: string;
  salary: number;
  bankBill: bigint;
  fullName: string;
}

export interface ITrainee extends IWorker {}

export interface IEmployee extends IWorker {
  status: EEmployeeStatus;
  inDepartment: IDepartment | null;
}
