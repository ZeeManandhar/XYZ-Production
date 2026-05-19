import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bookingRoutes from "./routes/bookings.js";
import contactRoutes from "./routes/contact.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
let mongoConnection;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "XYZ Production API" });
});

const connectDatabase = async (_req, _res, next) => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not configured.");
    }

    if (mongoose.connection.readyState !== 1) {
      mongoConnection = mongoConnection || mongoose.connect(process.env.MONGODB_URI);
      await mongoConnection;
    }

    next();
  } catch (error) {
    next(error);
  }
};

app.use("/api/bookings", connectDatabase, bookingRoutes);
app.use("/api/contact", connectDatabase, contactRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not configured.");
    }

    mongoConnection = mongoose.connect(process.env.MONGODB_URI);
    await mongoConnection;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

if (!process.env.VERCEL) {
  startServer();
}

export default app;
