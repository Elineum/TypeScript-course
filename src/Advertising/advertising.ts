import { IClientsDatabase } from "../Clients/clients.interface";
import { IAdvertising } from "./advertising.interface";

export class Advertising implements IAdvertising {
  #clientDatabase?: IClientsDatabase;

  announceZooPromotions(text: string): void {
    this.#clientDatabase?.clients.forEach((client) =>
      console.log(
        `${client.getFullname()} get info about new promo in zoo, contact source: ${
          client.contacts
        }. ${text}`
      )
    );
  }

  setClientDatabase(clientDatabase: IClientsDatabase): this {
    this.#clientDatabase = clientDatabase;

    return this;
  }
}
