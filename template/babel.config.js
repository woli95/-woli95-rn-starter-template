module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./src'],
        alias: {
          '@/*': './src/*',
          '@services': './src/services',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@hocs': './src/hocs',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
