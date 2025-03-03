import { DeviceCreator } from './DeviceCreator/deviceCreator';
import { IphoneCreator } from './IphoneCreator/iphoneCreator';
import { SamsungCreator } from './SamsungCreator/samsungCreator';

function useDevice(creator: DeviceCreator) {
  console.log(creator.turnOn());
  console.log(creator.turnOff());
}

useDevice(new IphoneCreator());
console.log(' ');
useDevice(new SamsungCreator());