module.exports = {
  webpack: (config, webpack) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        APP_TINY_MCE_KEY: JSON.stringify(process.env.APP_TINY_MCE_KEY),
      })
    );
    return config;
  },
};
