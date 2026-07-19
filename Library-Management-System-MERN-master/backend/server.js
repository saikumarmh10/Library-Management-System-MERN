import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import bookRoutes from "./routes/books.js";
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from "./routes/categories.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Library Management System API");
});

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("Mongo URL:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
    process.exit(1);
  }
};

connectDB();