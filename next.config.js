const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Header': '.src/components/RemoteComponent',
        },
        shared: {},
      })
    );
    return config;
  },
};
