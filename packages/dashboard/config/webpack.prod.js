const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap',
      },
      // shared: ['react', 'react-dom']
      // In case you want to make all dependencies to be shared
      shared: packageJson.dependencies,
    }),
  ],
};

// In merge function, the 2nd parameter overrides any similar options which are already declared.
module.exports = merge(commonConfig, prodConfig);
