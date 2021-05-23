module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0, // <--- THIS IS THE NEW RULE
  },
};
