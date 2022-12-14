const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    // historyApiFallback: {
    //   index: "/index.html",
    // },
    historyApiFallback: true,
  },
  output: {
    // Need to solve path issue, when nested routes are defined.
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
      },
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

// In merge function, the 2nd parameter overrides any similar options which are already declared.
module.exports = merge(commonConfig, devConfig);
