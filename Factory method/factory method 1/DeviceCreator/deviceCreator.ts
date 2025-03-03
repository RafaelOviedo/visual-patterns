export interface IDevice {
  turnOn(): string;
  turnOff(): string;
}


export abstract class DeviceCreator {
  abstract createDevice(): IDevice;

  public turnOn(): string {
    const device = this.createDevice();
    return device.turnOn();
  }

  public turnOff(): string {
    const device = this.createDevice();
    return device.turnOff();
  }
}
