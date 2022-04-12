module.exports = {
  distDir: 'build',
  outDir: 'out',
  async redirects() {
    return [
      {
        source: '/news/category',
        destination: '/news/category/all',
        permanent: true,
      },
    ];
  },
};
