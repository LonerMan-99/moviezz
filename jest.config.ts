module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // This is for handling CSS modules and other assets
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
