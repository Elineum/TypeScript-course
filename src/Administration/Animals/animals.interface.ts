export interface IAnimal {
  name: string;
  age: number;
  kind: string;
  healthStatus: string;
  expectedExpenses: number;
  misc: string | null;
}

export interface IAnimalDatabase {
  buyAnimal(animal: IAnimal): this;
  sellAnimal(animalName: string, kind: string): this;
  getAnimalExpenses(): number;
}
