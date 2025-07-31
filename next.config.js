const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.output.publicPath = 'http://localhost:3001/_next/';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './RemoteFullApp': './src/components/RemoteComponent',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};
