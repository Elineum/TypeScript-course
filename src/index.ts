import { AirConditionerAdapter } from "./adapters/airConditionerAdapter";
import { LightAdapter } from "./adapters/lightAdapter";
import { SecuritySystemAdapter } from "./adapters/securitySystemAdapter";
import { AirConditioner } from "./apis/airConditionerSystem.api";
import { SecuritySystem } from "./apis/securitySystem.api";
import { EDeviceType } from "./types/deviceType.enum";
import { ISystem } from "./types/systemAdapter.interface";

class HomeControlPanel {
  #systems: Map<string, ISystem> = new Map();

  constructor(...args: ISystem[]) {
    args.forEach((system) => {
      if (!this.#systems.has(system.type)) {
        this.#systems.set(system.type as string, system);
      }
    });
  }

  toggleDevice(type: EDeviceType) {
    // Some additional business logic.....
    this.#systems.get(type)?.toggle();
  }

  leaveHome(): void {
    // Some additional business logic.....

    const mustBeEnabled: EDeviceType[] = [EDeviceType.SecuritySystem]; // can add more if needed

    this.#systems.forEach((system) =>
      mustBeEnabled.includes(system.type as EDeviceType)
        ? system.enable()
        : system.disable()
    );
  }

  backHome(): void {
    // Some additional business logic.....

    const mustBeDisabled: EDeviceType[] = [EDeviceType.SecuritySystem]; // same,

    this.#systems.forEach((system) =>
      mustBeDisabled.includes(system.type as EDeviceType)
        ? system.enable()
        : system.disable()
    );
  }
}

class RemoteControl {
  #systems: Map<string, ISystem> = new Map();

  constructor(...args: ISystem[]) {
    args.forEach((system) => {
      const blockedSystems = [EDeviceType.SecuritySystem];

      if (blockedSystems.includes(system.type)) return;

      if (!this.#systems.has(system.type)) {
        this.#systems.set(system.type, system);
      }
    });
  }

  toggleLight(): void {
    this.#systems.get(EDeviceType.Light)?.toggle();
  }

  toggleAirCondition(): void {
    this.#systems.get(EDeviceType.AirConditioner)?.toggle();
  }
}
