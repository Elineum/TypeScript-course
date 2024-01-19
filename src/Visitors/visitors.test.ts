import { Client } from "../Clients/client";
import { IClient } from "../Clients/clients.interface";
import { VisitorsDatabase } from "./visitors";

describe("Visitors", () => {
  let emptyVisitorDatabase: VisitorsDatabase;
  let filledVisitorDatabase: VisitorsDatabase;
  let visitor: IClient = new Client("Mock", "User");

  beforeAll(() => {
    emptyVisitorDatabase = new VisitorsDatabase();
    filledVisitorDatabase = new VisitorsDatabase();
    filledVisitorDatabase.visitors = [visitor];
  });

  it("should create instance of VisitorsDatabase", () => {
    expect(emptyVisitorDatabase).toBeInstanceOf(VisitorsDatabase);
  });

  it("should return empty client array", () => {
    expect(emptyVisitorDatabase.visitors).toEqual([]);
  });

  it("should return array with single client data", () => {
    expect(filledVisitorDatabase.visitors).toEqual([visitor]);
  });
});
