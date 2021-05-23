module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: true,
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@api': ['./src/api'],
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@configs': ['./src/configs'],
          '@global': ['./src/global'],
          '@hooks': ['./src/hooks'],
          '@i18n': ['./src/i18n'],
          '@navigation': ['./src/navigation'],
          '@popups': ['./src/popups'],
          '@providers': ['./src/providers'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@store': ['./src/store'],
          '@types': ['./src/types'],
          '@utils': ['./src/utils'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
