const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

const setStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

const getUid = () => {
  return getStorage("user-uid");
};

const setUid = (value: string) => {
  return setStorage("user-uid", value);
};

const getDeviceKey = () => {
  return getStorage("user-device-key");
};

const setDeviceKey = (value: string) => {
  return setStorage("user-device-key", value);
};

const removeToken = () => {
  removeStorage("user-uid");
  removeStorage("user-device-key");
  removeStorage("user-email");
  removeStorage("user-password");
};

export default {
  getStorage: getStorage,
  setStorage: setStorage,
  getUid: getUid,
  setUid: setUid,
  getDeviceKey: getDeviceKey,
  setDeviceKey: setDeviceKey,
  removeToken: removeToken,
};
