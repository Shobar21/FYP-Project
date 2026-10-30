const path = require("path")

// one .env file at the project root (next to package.json)
const envFilePath = path.join(__dirname, "..", ".env")

module.exports = {
  envFilePath
}
