import express from "express";
import activityLogger from "./middleware/activityLogger";
import PostRoutes from "./routs/PostRoutes";
import { config } from "dotenv";
import cors, { CorsOptions } from "cors";

config();

const app = express();

const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_PORT,
};

app.use(cors(corsOptions));
app.use(activityLogger);
app.use(express.json());
const port = process.env.PORT;

app.use("/posts", PostRoutes);

app.listen(port, () => console.log(`Personally is listening on port ${port}`));
