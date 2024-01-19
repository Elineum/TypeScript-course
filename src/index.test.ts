import { Zoo } from ".";
import { Accounting } from "./Accounting/accounting";
import { IAccounting } from "./Accounting/accounting.interface";
import { Administration } from "./Administration/administation";
import { IAdministration } from "./Administration/administration.interface";
import { Advertising } from "./Advertising/advertising";
import { IAdvertising } from "./Advertising/advertising.interface";
import { Cashier } from "./Cashier/cashier";
import { ICashier } from "./Cashier/cashier.interface";

describe("Main Zoo", () => {
  let zoo: Zoo;
  let cassier: ICashier;
  let accounting: IAccounting;
  let administation: IAdministration;
  let advertising: IAdvertising;

  beforeAll(() => {
    zoo = new Zoo();
    cassier = zoo.goToCashier();
    accounting = zoo.goToAccounting();
    administation = zoo.goToAdministration();
    advertising = zoo.goToAdvertising();
  });

  it("should create instance of Zoo", () => {
    expect(zoo).toBeInstanceOf(Zoo);
  });

  it("should return instance of Accounting", () => {
    expect(accounting).toBeInstanceOf(Accounting);
  });

  it("should return instance of Administration", () => {
    expect(administation).toBeInstanceOf(Administration);
  });

  it("should return instance of Advertising", () => {
    expect(advertising).toBeInstanceOf(Advertising);
  });

  it("should return instance of Cassier", () => {
    expect(cassier).toBeInstanceOf(Cashier);
  });
});
