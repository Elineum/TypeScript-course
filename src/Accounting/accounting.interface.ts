import { IWorkerDatabase } from "../Administration/Workers/workers.interface";

export interface IAccounting {
  generateFinanceReport(): void;
  receiveReport(report: IReport): void;
  paySalary(): this;
  purchaseAnimalFood(): this;
  makeZooMaintenance(): this;
  setWorkersDatabase(workersDatabase: IWorkerDatabase): this;
}

export interface IReport {
  date: string;
  money: number;
}
