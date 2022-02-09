import express, { Express } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute";
import postRoutes from "./routes/postRoute";
import dotenv from "dotenv";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://socialuwu.netlify.app/",
  })
);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

dotenv.config({
  path: "./config.env",
});

const PORT = process.env.PORT || 8000;
const MONGO_URL: any = process.env.MONGO_URL;

app.listen(PORT, () => {
  mongoose.connect(MONGO_URL, () => {
    console.log("Connected");
  });
});
