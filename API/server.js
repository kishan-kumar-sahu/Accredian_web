import express from "express";
import mongoDb from "./DB/config.js";
import RequiresRouter from "./routers/user.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

mongoDb();

app.use("/api", RequiresRouter);

app.listen(port, () => {
  console.log(`server is started port on ${port}`);
});