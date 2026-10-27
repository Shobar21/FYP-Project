const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { envFilePath } = require("./constants.js");
require("dotenv").config({ path: envFilePath });

const { ProductRouter } = require("./routes/product_routes.js");
const { user_router } = require("./routes/user.js");
const { authRouter } = require("./routes/auth.js");
const { priceTrackerRouter } = require("./routes/price_tracker.js");
const { contactus_route } = require("./routes/contactus_route.js");
const { linkRouter } = require("./routes/link.js");
const { admin_route } = require("./routes/admin.js");

const app = express();

// Connection string comes from the environment (Vercel / .env).
// Without it, we fall back to the local MongoDB on your PC.
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smartbuy";

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ---- database connection (safe for Vercel) ----
let lastDbError = null;
let connecting = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return true;

  if (!connecting) {
    connecting = mongoose
      .connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
      .then(() => {
        lastDbError = null;
        console.log("Connection Established");
      })
      .catch((err) => {
        lastDbError = err.message;
        console.log("Connection Failed: " + err.message);
      })
      .finally(() => {
        connecting = null;
      });
  }

  await connecting;
  return mongoose.connection.readyState === 1;
}

connectDB();

app.get("/api", (req, res) => {
  res.json({ status: true, message: "API is running" });
});

// Diagnostic page (delete once everything works): /api/health
app.get("/api/health", async (req, res) => {
  const connected = await connectDB();
  const m = MONGODB_URI.match(
    /^mongodb(?:\+srv)?:\/\/(?:([^:]*):[^@]*@)?([^/?]+)\/?([^?]*)/
  );
  res.json({
    dbConnected: connected,
    error: connected ? null : lastDbError,
    hasMongoUri: Boolean(process.env.MONGODB_URI),
    hasJwt: Boolean(process.env.JWT),
    uriUser: m ? m[1] || null : null,
    uriHost: m ? m[2] : null,
    uriDatabase: m ? m[3] : null,
  });
});

// every other API request waits for the database first
app.use("/api", async (req, res, next) => {
  const ok = await connectDB();
  if (!ok) {
    return res.status(503).json({
      code: 503,
      msg: `Database not connected: ${lastDbError || "unknown error"}`,
    });
  }
  next();
});

app.use("/api/products", ProductRouter);
app.use("/api/user", user_router);
app.use("/api/auth", authRouter);
app.use("/api/price-track", priceTrackerRouter);
app.use("/api/contact", contactus_route);
app.use("/api/links", linkRouter);
app.use("/api/admin", admin_route);

module.exports = app;
