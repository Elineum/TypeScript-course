import { IAdvertising } from "../Advertising/advertising.interface";

export interface IAdministration {
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
