import { IDevice } from "../../DeviceCreator/deviceCreator"

export class GenericIphone implements IDevice {
  turnOn(): string {
      return 'Generic Iphone turning on'
  }
  turnOff(): string {
      return 'Generic Iphone turning off'
  }
}