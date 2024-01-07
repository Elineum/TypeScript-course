import { SecuritySystem } from "../apis/securitySystem.api";
import { EDeviceType } from "../types/deviceType.enum";
import { ISystem } from "../types/systemAdapter.interface";

export class SecuritySystemAdapter implements ISystem {
  #securitySystem: SecuritySystem;
  type: EDeviceType;

  constructor(securitySystem: SecuritySystem) {
    this.#securitySystem = securitySystem;
    this.type = securitySystem.type;
  }

  toggle(): void {
    this.#securitySystem.isWatching ? this.disable() : this.enable();
  }

  enable(): void {
    this.#securitySystem.enable();
  }

  disable(): void {
    this.#securitySystem.disable();
  }
}
