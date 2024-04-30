import { isWindows, isMacOs, isAndroid, isIOS } from "react-device-detect";

const getDevice = () => {
  if (isWindows) {
    return "WEB";
  } else if (isMacOs) {
    return "PC";
  } else if (isAndroid) {
    return "AND";
  } else if (isIOS) {
    return "IOS";
  }
  return "PC";
};

const getDeviceUUID = () => {
  // TODO Native Device Unique Id 필요
  return process.env.REACT_APP_DEVICE;
};

export default {
  getDeviceUUID: getDeviceUUID,
  getDevice: getDevice,
};
