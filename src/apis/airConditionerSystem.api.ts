import { EDeviceType } from "../types/deviceType.enum";

export class AirConditioner {
  // НЕ ЗМІНЮЙТЕ ЦЕЙ  КЛАС

  type = EDeviceType.AirConditioner;
  #isWorking = false;

  get isWorking(): boolean {
    return this.#isWorking;
  }

  start() {
    this.#isWorking = true;
    console.log("Air Conditioner is ON");
  }

  stop() {
    this.#isWorking = false;
    console.log("Air Conditioner is OFF");
  }
}
