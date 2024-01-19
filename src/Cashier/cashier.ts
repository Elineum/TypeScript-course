import { Client } from "../Clients/client";
import {
  IClient,
  IClientsDatabase,
  INewClient,
} from "../Clients/clients.interface";
import { IVisitorsDatabase } from "../Visitors/visitors.interface";
import { Revenue } from "./Revenue/revenue";
import { IRevenue } from "./Revenue/revenue.interface";
import { ITicket } from "./Tickets/ticket.interface";
import { TicketBuilder } from "./Tickets/ticketBuilder";
import { ITicketBuilder } from "./Tickets/ticketBuilder.interface";
import { ICashier } from "./cashier.interface";

// Аналогично с родительским классом Zoo, данный класс является родительским для некоторых внутренних, а так же имеет в своем распоряжении ссылки на
// ссылки на другие экземпляры классов, для изменения их. Т.е. класс кассы имеет как ассоциативный тип взаимоотношений (с классами баз данных), а так же
// композиционный с главным классом Zoo.
// Так же мне показалось достаточно удобным, что бы у кассы были простые методы для получения билетов, без деталей реализации
// Всё что нужно кассиру - просто нажать на "интерфейс" кнопки, и получить то что ему нужно. Внутри же кассы используется паттерн строителя
// который уже вернет нам сгенерированный по определенным правилам билет.
export class Cashier implements ICashier {
  #builder: ITicketBuilder;
  #visitorDatabase?: IVisitorsDatabase;
  #clientDatabase?: IClientsDatabase;
  #revenue: IRevenue;

  constructor() {
    this.#builder = new TicketBuilder();
    this.#revenue = new Revenue();
  }

  getAdultTicket(clientInfo: INewClient): ITicket {
    const client = this.#makeNewClient(clientInfo);
    this.#registerClient(client);
    this.#revenue.registerPurchase(15);

    return this.#builder
      .setType("adult")
      .setFullname(client)
      .setPrice(15)
      .create();
  }

  getChildrenTicket(clientInfo: INewClient): ITicket {
    const client = this.#makeNewClient(clientInfo);
    this.#registerClient(client);
    this.#revenue.registerPurchase(10);

    return this.#builder
      .setType("children")
      .setFullname(client)
      .setPrice(10)
      .create();
  }

  getFamilyTicket(...clientsInfo: INewClient[]): ITicket {
    const clientsArray = clientsInfo.map((clientInfo) =>
      this.#makeNewClient(clientInfo)
    );
    clientsArray.forEach((client) => {
      this.#registerClient(client);
    });
    this.#revenue.registerPurchase(20);

    return this.#builder
      .setType("family")
      .setFamilyName(...clientsArray)
      .setPrice(20)
      .create();
  }

  #makeNewClient(clientInfo: INewClient) {
    return new Client(clientInfo.name, clientInfo.surname, clientInfo.contacts);
  }

  #registerClient(client: IClient): void {
    if (this.#clientDatabase) {
      const currClients = [...this.#clientDatabase.clients];
      const existedClient = currClients.find(
        (existClient) => existClient.getFullname() === client.getFullname()
      );

      if (existedClient) return;

      currClients.push(client);
      this.#clientDatabase.clients = currClients;
    }

    if (this.#visitorDatabase) {
      const currVisitors = [...this.#visitorDatabase.visitors];
      const existedVisitors = currVisitors.find(
        (existVisitor) => existVisitor.getFullname() === client.getFullname()
      );

      if (existedVisitors) return;

      currVisitors.push(client);
      this.#visitorDatabase.visitors = currVisitors;
    }
  }

  goToRevenue(): IRevenue {
    return this.#revenue;
  }

  setVisitorDatabase(visitorDatabase: IVisitorsDatabase): this {
    this.#visitorDatabase = visitorDatabase;
    return this;
  }

  setClientDatabase(clientDatabase: IClientsDatabase): this {
    this.#clientDatabase = clientDatabase;

    return this;
  }
}
