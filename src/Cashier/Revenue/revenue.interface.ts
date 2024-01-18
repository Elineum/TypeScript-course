import { IAccounting } from "../../Accounting/accounting.interface";

export interface IRevenue {
  registerPurchase(money: number): void;
  setAccounting(accounting: IAccounting): void;
}
