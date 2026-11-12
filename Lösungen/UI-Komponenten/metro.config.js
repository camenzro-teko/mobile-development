const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules ?? {}),
  'react-native-screens': path.resolve(__dirname, 'node_modules/react-native-screens'),
};

module.exports = config;
