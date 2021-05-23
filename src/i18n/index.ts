import tr from './tr';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr,
};
const instance = i18n.createInstance();

instance.use(initReactI18next).init({
  resources,
  lng: 'tr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default instance;
