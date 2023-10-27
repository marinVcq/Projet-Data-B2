const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fortunato-api.onrender.com',
      changeOrigin: true,
    })
  );
};
