import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const aspectRatio = deviceWidth / deviceHeight;

const navWithoutStatusBarHeight = 44;

const navHeight: number =
  Platform.OS === 'android'
    ? navWithoutStatusBarHeight
    : getStatusBarHeight() + navWithoutStatusBarHeight;

const cameraWidth = deviceWidth;

const cameraHeight = deviceHeight - navHeight;

export default {
  deviceWidth,
  deviceHeight,
  aspectRatio,
  navHeight,
  navWithoutStatusBarHeight,
  cameraWidth,
  cameraHeight,
};
