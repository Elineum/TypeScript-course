import { IDepartment } from "../../Departments/interfaces/departments.interface";
import {
  IEmployee,
  ITrainee,
} from "../../Workers/interfaces/workers.interface";

export interface ICompany {
  name: string;
  addTraineeTo(departmentName: string, trainee: ITrainee): void;
  hireEmployeeTo(departmentName: string, employee: IEmployee): void;
  addDepartment(department: IDepartment): void;
  removeDepartment(departmentName: string): void;
  takeOnBalance(departmentName: string): void;
  dropFromBalance(departmentName: string): void;
  showTotalBalance(): void;
  fireWorker(workerName: string): void;
  promoteTrainee(traineeFullName: string): void;
  makeInvestment(money: number): void;
  withdrawCompanyMoney(money: number): void;
  sendSalary(): void;
}
