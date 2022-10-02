module.exports = {
  webpack: (config, webpack) => {
    console.log("Using custom webpack plugin");

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          APP_TINY_MCE_KEY: JSON.stringify(process.env.APP_TINY_MCE_KEY),
        },
      })
    );
    return config;
  },
};
