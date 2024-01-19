import { iWorker } from "./workers.interface";

export class Worker implements iWorker {
  #name: string;
  #surname: string;
  #position: string;
  #salary: number;

  constructor(name: string, surname: string, position: string, salary: number) {
    this.#name = name;
    this.#surname = surname;
    this.#position = position;
    this.#salary = salary;
  }

  changePosition(newPosition: string): this {
    this.#position = newPosition;

    return this;
  }

  changeSalary(newSalary: number): this {
    this.#salary = newSalary;

    return this;
  }

  getFullname(): string {
    return `${this.#name} ${this.#surname}`;
  }

  get salary(): number {
    return this.#salary;
  }

  showFullInfo(): this {
    console.log(
      `${this.getFullname()}, worker on ${this.#position} position, with $${
        this.#salary
      } salary.`
    );

    return this;
  }
}
