import { IAnimal, IAnimalDatabase } from "./animals.interface";

export class AnimalDatabase implements IAnimalDatabase {
  #animals: IAnimal[] = [];
  #animalExpenses!: number;

  constructor() {
    this.#calcAnimalExpenses();
  }

  buyAnimal(animal: IAnimal): this {
    this.#animals.push(animal);
    this.#calcAnimalExpenses();

    return this;
  }

  sellAnimal(animalName: string, kind: string): this {
    this.#animals = this.#animals.filter(
      (animal) => animal.name !== animalName && animal.kind !== kind
    );
    this.#calcAnimalExpenses();

    return this;
  }

  #calcAnimalExpenses() {
    this.#animalExpenses = this.#animals.reduce(
      (acc, { expectedExpenses }) => acc + expectedExpenses,
      0
    );
  }

  getAnimalExpenses(): number {
    return this.#animalExpenses;
  }
}
