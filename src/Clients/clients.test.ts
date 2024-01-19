import { Client } from "./client";
import { ClientsDatabase } from "./clients";
import { IClient, IClientsDatabase } from "./clients.interface";

describe("Clients", () => {
  let emptyClientDatabase: IClientsDatabase;
  let filledClientDatabase: IClientsDatabase;
  let client: IClient = new Client("Mock", "User");

  beforeAll(() => {
    emptyClientDatabase = new ClientsDatabase();
    filledClientDatabase = new ClientsDatabase();
    filledClientDatabase.clients = [client];
  });

  it("should create instance of ClientsDatabase", () => {
    expect(emptyClientDatabase).toBeInstanceOf(ClientsDatabase);
  });

  it("should return empty client array", () => {
    expect(emptyClientDatabase.clients).toEqual([]);
  });

  it("should return array with single client data", () => {
    expect(filledClientDatabase.clients).toEqual([client]);
  });
});
