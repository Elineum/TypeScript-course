import { IWorker } from "../../Workers/interfaces/workers.interface";
import { Employee, Trainee } from "../../Workers/workers";

export interface IDepartment {
  incomeSource: "accounting" | "self";
  budget: IBudget;
  name: string;
  ownEmpoyees: IWorker[];
  direction: string;
  setIncomeDependencies(dependence: "accounting" | "self"): void;
  getBalance(): number;
  addWorker(worker: Trainee | Employee): void;
  removeWorker(workerFullName: string): void;
  traineeToEmployee(traineeFullName: string): void;
}

export interface IAccounting extends IDepartment {
  isAccounting: boolean;
  balance: number;
  getInvestment(money: number): void;
  getOnBalance(departament: IDepartment): void;
  dropFromBalance(departament: IDepartment): void;
  withdrawFromBalance(money: number): void;
  paySalary(departamentsList: IDepartment[]): void;
}

export interface IBudget {
  debet: ITransaction[];
  credit: ITransaction[];
}

export interface ITransaction {
  date: string;
  change: number;
}
