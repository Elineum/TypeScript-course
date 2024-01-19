import { IClient, IClientsDatabase } from "./clients.interface";

export class ClientsDatabase implements IClientsDatabase {
  #clients: IClient[] = [];

  get clients() {
    return this.#clients;
  }

  set clients(newClients: IClient[]) {
    this.#clients = newClients;
  }
}
