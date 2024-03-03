import express from "express";
import activityLogger from "./middleware/activityLogger";
import ArticleRoutes from "./routs/ArticleRoutes";
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

app.use("/Articles", ArticleRoutes);

app.listen(port, () => console.log(`Personally is listening on port ${port}`));
