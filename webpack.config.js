module.exports = {
    // Other webpack configuration options...
  
    devServer: {
      // Other devServer options...
  
      // Add the following line to disable host checking
      disableHostCheck: true,
    },
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
  };