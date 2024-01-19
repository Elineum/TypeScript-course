import {
  IClient,
  IClientsDatabase,
  INewClient,
} from "../Clients/clients.interface";
import { IVisitorsDatabase } from "../Visitors/visitors.interface";
import { IRevenue } from "./Revenue/revenue.interface";
import { ITicket } from "./Tickets/ticket.interface";

export interface ICashier {
  getAdultTicket(client: INewClient): ITicket;
  getChildrenTicket(client: INewClient): ITicket;
  getFamilyTicket(...clients: INewClient[]): ITicket;

  goToRevenue(): IRevenue;
  setVisitorDatabase(visitorDatabase: IVisitorsDatabase): this;
  setClientDatabase(clientDatabase: IClientsDatabase): this;
}
