export interface INewClient {
  name: string;
  surname: string;
  contacts?: string;
}

export interface IClient {
  contacts?: string;

  getFullname(): string;
}

export interface IClientsDatabase {
  clients: IClient[];
}
