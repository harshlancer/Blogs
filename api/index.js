import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "../api/routes/auth.route.js";
import cors from "cors";

mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true, // If you need to send cookies or authentication headers
  })
);

app.use(express.json());

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal error";
  console.error(err); // Log the error
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
