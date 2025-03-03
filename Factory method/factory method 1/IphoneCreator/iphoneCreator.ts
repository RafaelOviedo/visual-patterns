import { DeviceCreator, type IDevice } from "../DeviceCreator/deviceCreator";
import { GenericIphone } from './modules/GenericIphone';
 
export class IphoneCreator extends DeviceCreator {
  createDevice(): IDevice {
      return new GenericIphone();
  }
}
