import { IAccounting } from "../../Accounting/accounting.interface";
import { formCorrectData } from "../../utils/formCorrectData";
import { IRevenue } from "./revenue.interface";

//Так же используется ассоциативный вид отношений, с классом бухгалтерии
export class Revenue implements IRevenue {
  #dailyRevenue: number[] = [];
  #currentDay: number = new Date().getDate();
  #accounting!: IAccounting;

  registerPurchase(money: number): void {
    if (this.#isDayTheSame()) {
      this.#dailyRevenue.push(money);
    } else {
      this.#sendDailyReport();
      this.#resetDay();
      this.registerPurchase(money);
    }
  }

  #resetDay(): void {
    this.#currentDay = new Date().getDate();
  }

  #isDayTheSame(): boolean {
    return this.#currentDay === new Date().getDate();
  }

  #sendDailyReport() {
    const dailyRevenue = this.#dailyRevenue.reduce(
      (acc, money) => acc + money,
      0
    );
    const report = {
      date: formCorrectData(),
      money: dailyRevenue,
    };

    this.#accounting.receiveReport(report);
  }

  setAccounting(accounting: IAccounting): void {
    this.#accounting = accounting;
  }
}
