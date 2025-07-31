const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'footer_app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Footer': '.src/components/RemoteComponent',
        },
        shared: {},
      })
    );
    return config;
  },
};
