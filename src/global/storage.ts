import AsyncStorage from '@react-native-community/async-storage';
import { defaultFunction } from '@global';
// import crashlytics from '@react-native-firebase/crashlytics';

const accessTokenTTL = (accessTokenWithTTL: string) => {
  const { token, ttl } = JSON.parse(accessTokenWithTTL);
  const currentDate = new Date();

  if (currentDate.getTime() < ttl) {
    return token;
  }

  return false;
};

const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (key === '@access_token' && data) {
      return accessTokenTTL(data);
    }

    return data;
  } catch (e) {
    // crashlytics().recordError(e);
  }
};

const setData = async (
  key: string,
  value: string,
  onSuccess: SetDataSuccess = defaultFunction,
  onError: SetDataError = defaultFunction,
) => {
  try {
    await AsyncStorage.setItem(key, value);
    onSuccess();
  } catch (e) {
    // crashlytics().recordError(e);
    onError(e);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // crashlytics().recordError(e);
  }
};

export type SetDataSuccess = () => void;
export type SetDataError = (e: Error) => void;

export { getData, setData, removeData };
