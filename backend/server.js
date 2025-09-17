// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

// routes
import tourRoutes from "./routes/tourRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ------------------ Middlewares ------------------
app.use(helmet());             // add security headers
app.use(cors());               // allow cross-origin requests
app.use(express.json());       // parse JSON request body
app.use(morgan("dev"));        // log HTTP requests

// ------------------ Routes ------------------
app.use("/api/tours", tourRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// health check
app.get("/", (req, res) => res.send("✅ Tour backend running"));

// ------------------ Serve Frontend in Production ------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });
}

// ------------------ Error Handler ------------------
app.use((err, req, res, next) => {
  console.error("❌ Server error:", err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server error" });
});

// ------------------ Start Server ------------------
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tourdb";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
