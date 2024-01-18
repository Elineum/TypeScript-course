import { Accounting } from "./Accounting/accounting";
import { IAccounting } from "./Accounting/accounting.interface";
import { Administration } from "./Administration/administation";
import { IAdministration } from "./Administration/administration.interface";
import { Advertising } from "./Advertising/advertising";
import { IAdvertising } from "./Advertising/advertising.interface";
import { Cashier } from "./Cashier/cashier";
import { ICashier } from "./Cashier/cashier.interface";
import { ClientsDatabase } from "./Clients/clients";
import { IClientsDatabase } from "./Clients/clients.interface";
import { VisitorsDatabase } from "./Visitors/visitors";
import { IVisitorsDatabase } from "./Visitors/visitors.interface";

// Я решил, что использовать ассоциативные отношение с другими классами внутри класса Zoo - правильно,
// потому что у нас в таком случае есть глобальная сущность, зоопарка, которая имеет доступ к
// другим подразделениям, или "базам данных", что на мой взгляд - удобно, все в внутри, и нет зависимостей от чего-то извне.
class Zoo {
  #cashier: ICashier = new Cashier();
  #visitors: IVisitorsDatabase = new VisitorsDatabase();
  #clients: IClientsDatabase = new ClientsDatabase();
  #adverstising: IAdvertising = new Advertising();
  #accounting: IAccounting = new Accounting();
  #administration: IAdministration = new Administration();

  constructor() {
    this.#adverstising.setClientDatabase(this.#clients);
    this.#accounting.setWorkersDatabase(this.#administration.workers);
    this.#cashier
      .setClientDatabase(this.#clients)
      .setVisitorDatabase(this.#visitors)
      .goToRevenue();
  }

  goToCashier(): ICashier {
    return this.#cashier;
  }

  goToAdvertising(): IAdvertising {
    return this.#adverstising;
  }

  goToAccounting(): IAccounting {
    return this.#accounting;
  }

  goToAdministration(): IAdministration {
    return this.#administration;
  }
}
