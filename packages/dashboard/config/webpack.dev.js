const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8083,
    // historyApiFallback: {
    //   index: '/index.html'
    // },
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    // Need to solve path issue, when nested routes are defined.
    publicPath: 'http://localhost:8083/',
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

// In merge function, the 2nd parameter overrides any similar options which are already declared.
module.exports = merge(commonConfig, devConfig);
