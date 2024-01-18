import { IAnimal } from "./animals.interface";

export class Animal implements IAnimal {
  #name: string;
  #age: number;
  #kind: string;
  #healthStatus: string;
  #expectedExpenses: number;
  #misc: string | null;

  constructor(
    name: string,
    age: number,
    kind: string,
    healthStatus: string,
    expectedExpenses: number,
    misc: string | null = null
  ) {
    this.#name = name;
    this.#age = age;
    this.#kind = kind;
    this.#healthStatus = healthStatus;
    this.#expectedExpenses = expectedExpenses;
    this.#misc = misc;
  }

  get name(): string {
    return this.#name;
  }

  get age(): number {
    return this.#age;
  }

  get healthStatus(): string {
    return this.#healthStatus;
  }

  get kind(): string {
    return this.kind;
  }

  get misc(): string {
    return this.#misc ? this.misc : "no additional data";
  }

  get expectedExpenses(): number {
    return this.#expectedExpenses;
  }
}
