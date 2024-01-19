import { Zoo } from "..";
import { Revenue } from "./Revenue/revenue";
import { IRevenue } from "./Revenue/revenue.interface";
import { ITicket } from "./Tickets/ticket.interface";
import { Ticket } from "./Tickets/ticketBuilder";

describe("Cassier", () => {
  let adultTicket: ITicket;
  let childrenTicket: ITicket;
  let familyTicket: ITicket;
  let revenue: IRevenue;

  beforeAll(() => {
    const fakeClient = { name: "Mock", surname: "Mock", contacts: "+0000" };
    const cassier = new Zoo().goToCashier();

    adultTicket = cassier.getAdultTicket(fakeClient);
    childrenTicket = cassier.getChildrenTicket(fakeClient);
    familyTicket = cassier.getFamilyTicket(fakeClient);

    revenue = cassier.goToRevenue();
  });

  it("should return instance of Ticket", () => {
    expect(adultTicket).toBeInstanceOf(Ticket);
  });

  it("should return instance of Ticket", () => {
    expect(childrenTicket).toBeInstanceOf(Ticket);
  });

  it("should return instance of Ticket", () => {
    expect(familyTicket).toBeInstanceOf(Ticket);
  });

  it("should return instance of Revenue", () => {
    expect(revenue).toBeInstanceOf(Revenue);
  });
});
