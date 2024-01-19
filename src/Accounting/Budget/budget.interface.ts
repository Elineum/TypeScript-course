import { IReport } from "../accounting.interface";

export interface IBudget {
  getActualBalance(): number;
  updateBudgetData(reports: IReport[]): this;
  showDetailedInfo(): this;
}
