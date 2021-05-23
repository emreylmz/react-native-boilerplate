/**
 * @format
 */

import dayjs from 'dayjs';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

// Disable Console Logs
if (!__DEV__) {
  console.log = () => {};
}

AppRegistry.registerComponent(appName, () => App);
