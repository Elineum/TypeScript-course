import { Light } from "../apis/lightSystem.api";
import { EDeviceType } from "../types/deviceType.enum";
import { ISystem } from "../types/systemAdapter.interface";

export class LightAdapter implements ISystem {
  #light: Light;
  type: EDeviceType;

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
