module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/Components': './src/Components',
          '~/Screens': './src/Screens',
          '~/StyleSheet': './src/StyleSheet',
          '~/Data': './src/Data',
        },
      },
    ],
  ],
};
