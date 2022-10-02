module.exports = {
  webpack: (config, webpack) => {
    console.log("Using custom webpack plugin");

    console.log("ENV");
    console.log("APP_TINY_MCE_KEY", process.env.APP_TINY_MCE_KEY);
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
