import { ITicket } from "./ticket.interface";
import { Ticket, TicketBuilder } from "./ticketBuilder";
import { ITicketBuilder } from "./ticketBuilder.interface";

describe("Ticket Builder", () => {
  let newTicket: ITicket;

  beforeEach(() => {
    const ticketBuilder: ITicketBuilder = new TicketBuilder();

    newTicket = ticketBuilder.create();
  });

  it("should return instance of Ticket", () => {
    expect(newTicket).toBeInstanceOf(Ticket);
  });
});
