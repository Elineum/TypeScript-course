export interface iWorker {
  changePosition(newPosition: string): this;
  changeSalary(newSalary: number): this;
  getFullname(): string;
  showFullInfo(): this;
  salary: number;
}

export interface IWorkerDatabase {
  addWorker(newWorker: iWorker): this;
  fireWorker(fullname: string): this;
  getSalaryExpenses(): number;
}
