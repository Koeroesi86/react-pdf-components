const path = require('path');

const webpackConfig = require("../webpack.config");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: 'webpack5',
    options: {
      fsCache: true,
    },
  },
  webpackFinal: (config) => {
    return {
      ...config,
      cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, "../.cache/storybook/webpack"),
      },
      resolve: {
        ...config.resolve,
        plugins: [...(config.resolve.plugins || []), ...webpackConfig.resolve.plugins],
      },
      // target: "web",
      // node: {
      //   ...config.node,
      //   module: "empty",
      //   dgram: "empty",
      //   dns: "mock",
      //   fs: "empty",
      //   http2: "empty",
      //   net: "empty",
      //   tls: "empty",
      //   child_process: "empty",
      // },
    };
  },
};
