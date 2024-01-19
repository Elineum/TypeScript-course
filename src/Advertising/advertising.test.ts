import { ClientsDatabase } from "../Clients/clients";
import { Advertising } from "./advertising";
import { IAdvertising } from "./advertising.interface";

describe("Advertising", () => {
  const advertising: IAdvertising = new Advertising().setClientDatabase(
    new ClientsDatabase()
  );

  it("should create instance of Advertising", () => {
    expect(advertising).toBeInstanceOf(Advertising);
  });
});
