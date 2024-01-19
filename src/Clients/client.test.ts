import { Client } from "./client";
import { IClient } from "./clients.interface";

describe("Client", () => {
  let mockUser: IClient;
  let mockUserWithContacts: IClient;
  let mockDataWithoutContacts = { name: "Jhon", surname: "Black" };
  let mockDataWithContacts = {
    ...mockDataWithoutContacts,
    contacts: "+000",
  };
  let mockUserFullname: string;

  beforeAll(() => {
    const { name, surname } = mockDataWithoutContacts;
    const { contacts } = mockDataWithContacts;
    mockUser = new Client(name, surname);
    mockUserWithContacts = new Client(name, surname, contacts);
    mockUserFullname = mockUser.getFullname();
  });

  it("should create instance of Client", () => {
    expect(mockUser).toBeInstanceOf(Client);
    expect(mockUserWithContacts).toBeInstanceOf(Client);
  });

  it("should return text with no contact info", () => {
    expect(mockUser.contacts).toEqual(
      "The user did not provide contact information"
    );
  });

  it("should return user contact info", () => {
    expect(mockUserWithContacts.contacts).toEqual("+000");
  });

  it("should return user fullname", () => {
    expect(mockUserWithContacts.getFullname()).toEqual("Jhon Black");
  });
});
