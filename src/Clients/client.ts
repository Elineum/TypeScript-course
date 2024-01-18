import { IClient } from "./clients.interface";

export class Client implements IClient {
  #name: string;
  #surname: string;
  #contacts?: string | undefined;

  constructor(name: string, surname: string, contacts?: string) {
    this.#name = name;
    this.#surname = surname;
    this.#contacts = contacts;
  }

  get contacts() {
    return this.#contacts
      ? this.#contacts
      : "The user did not provide contact information";
  }

  getFullname(): string {
    return `${this.#name} ${this.#surname}`;
  }
}
