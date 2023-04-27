module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    'optional-require',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _assets: './assets',
          _components: './src/presentation/components',
          _navigators: './src/presentation/navigators',
          _screens: './src/presentation/screens',
          _global: './src/application/global',
          _types: './src/application/types',
          _util: './src/application/util',
          _apis: './src/infrastucture/apis',
          _slices: './src/application/state-manager/services',
          _firebase: './src/infrastucture/firebase',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
