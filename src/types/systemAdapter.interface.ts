import { EDeviceType } from "./deviceType.enum";

export interface ISystem {
  type: EDeviceType;
  toggle(): void;
  enable(): void;
  disable(): void;
}
