// While you develop on your PC, forward /api requests to the backend (port 5000).
// (Not used on Vercel: there /api is served by the api/ folder.)
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
