import { IWorkerDatabase, iWorker } from "./workers.interface";

export class WorkerDatabase implements IWorkerDatabase {
  #workers: iWorker[] = [];
  #salaryExpenses!: number;

  constructor() {
    this.#calcSalaryExpenses();
  }

  addWorker(newWorker: iWorker): this {
    this.#workers.push(newWorker);
    this.#calcSalaryExpenses();

    return this;
  }

  fireWorker(fullname: string): this {
    this.#workers = this.#workers.filter(
      (worker) => worker.getFullname() !== fullname
    );
    this.#calcSalaryExpenses();

    return this;
  }

  #calcSalaryExpenses() {
    this.#salaryExpenses = this.#workers.reduce(
      (acc, { salary }) => acc + salary,
      0
    );
  }

  getSalaryExpenses(): number {
    return this.#salaryExpenses;
  }
}
