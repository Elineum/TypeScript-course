import { Budget } from "./Budget/budget";
import { IBudget } from "./Budget/budget.interface";
import { IAccounting, IReport } from "./accounting.interface";

export class Accounting implements IAccounting {
  #reportLogs: IReport[] = [];
  #budget: IBudget = new Budget();

  generateFinanceReport(): void {
    this.#budget.showDetailedInfo();
  }

  receiveReport(report: IReport): void {
    this.#reportLogs.push(report);
  }

  paySalary(): this {
    const salaryPrice = 1500;

    this.#getFreeMoney() > salaryPrice
      ? console.log(`You paid salaries to all employees`)
      : console.log(`You can't afford this option! Peoples may be angry.`);

    return this;
  }

  purchaseAnimalFood(): this {
    const foodPrice = 70;

    this.#getFreeMoney() > foodPrice
      ? console.log(`You purchase 100kg animal food`)
      : console.log(`You can't afford this purchase`);

    return this;
  }

  makeZooMaintenance(): this {
    const maintenancePrice = 90;

    this.#getFreeMoney() > maintenancePrice
      ? console.log(`You order cleaning service for Zoo`)
      : console.log(`You can't afford this service`);

    return this;
  }

  #getFreeMoney(): number {
    return this.#budget.updateBudgetData(this.#reportLogs).getActualBalance();
  }
}
