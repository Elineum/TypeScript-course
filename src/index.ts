import { airConditionerAdapter } from "./adapters/airConditionerAdapter";
import { lightAdapter } from "./adapters/lightAdapter";
import { securitySystemAdapter } from "./adapters/securitySystemAdapter";
import { AirConditioner } from "./apis/airConditionerSystem.api";
import { Light } from "./apis/lightSystem.api";
import { SecuritySystem } from "./apis/securitySystem.api";
import { EDeviceType } from "./types/deviceType.enum";
import { ISystem } from "./types/systemAdapter.interface";

class HomeControlPanel {
  protected systems: Map<string, ISystem> = new Map();

  constructor(...args: ISystem[]) {
    args.forEach((system) => {
      if (!this.systems.has(system.type)) {
        this.systems.set(system.type as string, system);
      }
    });
  }

  toggleDevice(type: EDeviceType) {
    // Some additional business logic.....
    this.systems.get(type)?.toggle();
  }

  leaveHome(): void {
    // Some additional business logic.....

    const mustBeEnabled: EDeviceType[] = [EDeviceType.SecuritySystem]; // can add more if needed

    this.systems.forEach((system) =>
      mustBeEnabled.includes(system.type as EDeviceType)
        ? system.enable()
        : system.disable()
    );
  }

  backHome(): void {
    // Some additional business logic.....

    const mustBeDisabled: EDeviceType[] = [EDeviceType.SecuritySystem]; // same,

    this.systems.forEach((system) =>
      mustBeDisabled.includes(system.type as EDeviceType)
        ? system.enable()
        : system.disable()
    );
  }
}

class RemoteControl extends HomeControlPanel {
  constructor(...args: ISystem[]) {
    super(...args);
    this.systems.delete(EDeviceType.SecuritySystem);
  }

  toggleLight(): void {
    super.toggleDevice(EDeviceType.Light);
  }

  toggleAirCondition(): void {
    super.toggleDevice(EDeviceType.AirConditioner);
  }

  override toggleDevice() {
    throw new Error("Remote control dont grant access to the this method.");
  }
  override leaveHome() {
    throw new Error("Remote control dont grant access to the this method.");
  }
  override backHome() {
    throw new Error("Remote control dont grant access to the this method.");
  }
}
