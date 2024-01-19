import { Accounting } from "./accounting";
import { IAccounting } from "./accounting.interface";

describe("Accounting", () => {
  let accounting: IAccounting = new Accounting();

  it("should create instance of Accounting", () => {
    expect(accounting).toBeInstanceOf(Accounting);
  });
});
