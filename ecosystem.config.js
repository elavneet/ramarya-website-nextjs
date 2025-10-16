module.exports = {
  apps: [
    {
      name: 'ramarya-website',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 5001,
      },
    },
  ],
};
