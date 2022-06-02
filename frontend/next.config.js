module.exports = {
  distDir: 'build',
  outDir: 'out',
  env: {
    STRAPI_ENDPOINT: process.env.STRAPI_ENDPOINT,
    APP_GRAPHQL_ENDPOINT: process.env.APP_GRAPHQL_ENDPOINT,
  },
  async redirects() {
    return [
      {
        source: '/news/category',
        destination: '/news/category/all',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/news/category/all',
        permanent: true,
      },
    ];
  },
};
