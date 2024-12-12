import express from "express";
import mongoose from "mongoose";
import tasksRoutes from "./src/routes/tasksRoutes.js";
import errorHandler from "./src/middlewares/error-handler.mjs";
import { requestLogger } from "./src/middlewares/request-logger.mjs";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
}

const mongoUri = process.env.MONGO_URI;

if (!process.env.PORT) {
    throw new Error("PORT is not defined in the environment variables.");
}

const port = parseInt(process.env.PORT, 10);

mongoose.connect(mongoUri).then(() => {
    console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());

app.use(requestLogger);

app.use("/todos", tasksRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
