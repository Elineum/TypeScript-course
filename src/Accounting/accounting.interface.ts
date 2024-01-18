export interface IAccounting {
  generateFinanceReport(): void;
  receiveReport(report: IReport): void;
  paySalary(): this;
  purchaseAnimalFood(): this;
  makeZooMaintenance(): this;
}

export interface IReport {
  date: string;
  money: number;
}
