module.exports = async ({ config }) => {
  config.resolve.mainFields = ['main'];

  return config;
};
