// noinspection JSUnusedGlobalSymbols

const webpackConfig = require("../webpack.config");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [...config.resolve.plugins, ...webpackConfig.resolve.plugins],
      },
      target: "web",
      node: {
        ...config.node,
        module: "empty",
        dgram: "empty",
        dns: "mock",
        fs: "empty",
        http2: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
      },
    };
  },
};
