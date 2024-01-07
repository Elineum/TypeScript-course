import { AirConditioner } from "../apis/airConditionerSystem.api";
import { EDeviceType } from "../types/deviceType.enum";
import { ISystem } from "../types/systemAdapter.interface";

export class AirConditionerAdapter implements ISystem {
  #airConditioner: AirConditioner;
  type: EDeviceType;

  constructor(airConditioner: AirConditioner) {
    this.#airConditioner = airConditioner;
    this.type = airConditioner.type;
  }

  toggle(): void {
    this.#airConditioner.isWorking ? this.disable() : this.enable();
  }

  enable(): void {
    this.#airConditioner.start();
  }

  disable(): void {
    this.#airConditioner.stop();
  }
}
