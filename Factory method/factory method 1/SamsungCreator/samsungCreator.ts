import { DeviceCreator, type IDevice } from "../DeviceCreator/deviceCreator";
import { GenericSamsung } from './modules/GenericSamsung';

export class SamsungCreator extends DeviceCreator {
  createDevice(): IDevice {
      return new GenericSamsung();
  }
}
