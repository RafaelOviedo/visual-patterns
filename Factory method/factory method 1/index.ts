// Product interface
export interface Device {
  turnOn(): string;
  turnOff(): string;
}

export class Iphone implements Device {
  turnOn(): string {
      return 'Turns ON Iphone'
  }
  turnOff(): string {
      return 'Turns OFF Iphone'
  }
}

export class Samsung implements Device {
  turnOn(): string {
    return 'Turns ON Samsung'
  }
  turnOff(): string {
      return 'Turns OFF Samsung'
  }
}


// Device Factory
export abstract class DeviceFactory {
  abstract createDevice(): Device;
}

class IphoneFactory extends DeviceFactory {
  createDevice(): Device {
      return new Iphone();
  }
}

class SamsungFactory extends DeviceFactory {
  createDevice(): Device {
    return new Samsung();
  }
}