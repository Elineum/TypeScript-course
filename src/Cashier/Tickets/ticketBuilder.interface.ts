import { IClient } from "../../Clients/clients.interface";
import { ITicket, TTicketPrice, TTicketType } from "./ticket.interface";

export interface ITicketBuilder {
  setPrice(price: TTicketPrice): this;
  setType(type: TTicketType): this;
  setFullname(client: IClient): this;
  setFamilyName(...clients: IClient[]): this;
  reset(): void;
  create(): ITicket;
}
