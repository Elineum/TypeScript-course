import { IAdvertising } from "../Advertising/advertising.interface";
import { Animal } from "./Animals/animal";
import { AnimalDatabase } from "./Animals/animals";
import { IAnimalDatabase } from "./Animals/animals.interface";
import { Worker } from "./Workers/worker";
import { WorkerDatabase } from "./Workers/workers";
import { IWorkerDatabase, iWorker } from "./Workers/workers.interface";
import { IAdministration } from "./administration.interface";

export class Administration implements IAdministration {
  #advertising!: IAdvertising;
  #workers: IWorkerDatabase = new WorkerDatabase();
  #animals: IAnimalDatabase = new AnimalDatabase();

  buyAnimal(
    name: string,
    age: number,
    kind: string,
    healthStatus: string,
    expectedExpenses: number,
    misc: string | null = null
  ): this {
    this.#animals.buyAnimal(
      new Animal(name, age, kind, healthStatus, expectedExpenses, misc)
    );
    return this;
  }

  sellAnimal(animalName: string, kind: string): this {
    this.#animals.sellAnimal(animalName, kind);
    return this;
  }

  hireWorker(
    name: string,
    surname: string,
    position: string,
    salary: number
  ): this {
    this.#workers.addWorker(new Worker(name, surname, position, salary));

    return this;
  }

  fireWorker(fullname: string): this {
    this.#workers.fireWorker(fullname);

    return this;
  }

  setAdvertising(advertising: IAdvertising): this {
    this.#advertising = advertising;

    return this;
  }

  makePromo(text: string): this {
    this.#advertising.announceZooPromotions(text);

    return this;
  }
}
