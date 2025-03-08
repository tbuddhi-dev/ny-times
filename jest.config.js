module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transform JS/JSX files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)', // Allow Jest to transform ES modules like axios
    ],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Mock SCSS imports for tests
    },
    testEnvironment: 'jsdom', // Use jsdom for testing DOM-related components
  };
  
  