// Local development only. On Vercel, api/index.js is used instead.
const app = require("./app");

// API_PORT is separate from PORT so it never clashes with the React dev server
const PORT = process.env.API_PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
