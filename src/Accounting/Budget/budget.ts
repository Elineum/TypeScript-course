import { IReport } from "../accounting.interface";
import { IBudget } from "./budget.interface";

export class Budget implements IBudget {
  #income: number = 0;
  #expenses: number = 0;
  #balance: number = 0;

  getActualBalance(): number {
    return this.#balance;
  }

  updateBudgetData(reports: IReport[]): this {
    reports.forEach(({ money }) =>
      money > 0 ? (this.#income += money) : (this.#expenses += money)
    );

    this.#balance = this.#income + this.#expenses;

    return this;
  }

  showDetailedInfo(): this {
    console.log(
      `We have $${this.#income} income, and $${
        this.#expenses
      }. Totally, we have $${this.#balance} profit! `
    );

    return this;
  }
}
