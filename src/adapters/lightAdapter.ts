import { Light } from "../apis/lightSystem.api";
import { ISystem } from "../types/systemAdapter.interface";

export class lightAdapter implements ISystem {
  #light: Light;
  type: string;

  constructor(light: Light) {
    this.#light = light;
    this.type = light.type;
  }

  toggle(): void {
    this.#light.isTurnedOn ? this.disable() : this.enable();
  }

  enable(): void {
    this.#light.turnOn();
  }

  disable(): void {
    this.#light.turnOff();
  }
}
