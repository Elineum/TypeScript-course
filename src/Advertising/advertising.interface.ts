import { IClientsDatabase } from "../Clients/clients.interface";

export interface IAdvertising {
  announceZooPromotions(text: string): void;
  setClientDatabase(clientDatabase: IClientsDatabase): this;
}
