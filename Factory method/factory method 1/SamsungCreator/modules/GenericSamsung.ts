import { IDevice } from "../../DeviceCreator/deviceCreator"

export class GenericSamsung implements IDevice {
  turnOn(): string {
      return 'Samsung A24 turning on'
  }
  turnOff(): string {
      return 'Samsung A24 turning off'
  }
}