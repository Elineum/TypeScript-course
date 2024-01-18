import { IAdvertising } from "../Advertising/advertising.interface";
import { IWorkerDatabase } from "./Workers/workers.interface";

export interface IAdministration {
  workers: IWorkerDatabase;
  buyAnimal(
    name: string,
    age: number,
    kind: string,
    healthStatus: string,
    expectedExpenses: number,
    misc: string | null
  ): this;
  sellAnimal(animalName: string, kind: string): this;
  hireWorker(
    name: string,
    surname: string,
    position: string,
    salary: number
  ): this;
  fireWorker(fullname: string): this;
  setAdvertising(advertising: IAdvertising): this;
  makePromo(text: string): this;
}
