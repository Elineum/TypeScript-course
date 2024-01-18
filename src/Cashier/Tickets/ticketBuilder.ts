import { IClient } from "../../Clients/clients.interface";
import { ITicket, TTicketPrice, TTicketType } from "./ticket.interface";
import { ITicketBuilder } from "./ticketBuilder.interface";

export class TicketBuilder implements ITicketBuilder {
  #ticket!: ITicket;

  constructor() {
    this.reset();
    //TODO / Почему бы не создавать вообще конструктор, и сделать new Ticket() как значение при инициализации для #ticket?
  }

  setPrice(price: TTicketPrice): this {
    this.#ticket.price = price;

    return this;
  }

  setType(type: TTicketType): this {
    this.#ticket.type = type;

    return this;
  }

  setFullname(client: IClient): this {
    this.#ticket.clientFullname = client.getFullname();

    return this;
  }

  setFamilyName(...clients: IClient[]): this {
    this.#ticket.clientFullname = clients
      .map((client) => client.getFullname())
      .join(", ");
    return this;
  }

  reset(): void {
    this.#ticket = new Ticket();
  }

  create(): ITicket {
    const currentTicket = this.#ticket;
    this.reset();

    return currentTicket;
  }
}

class Ticket implements ITicket {
  #price!: TTicketPrice;
  #type!: TTicketType;
  #clientFullname!: string;

  set price(price: TTicketPrice) {
    this.#price = price;
  }

  set type(type: TTicketType) {
    this.#type = type;
  }

  set clientFullname(fullName: string) {
    this.#clientFullname = fullName;
  }
}
