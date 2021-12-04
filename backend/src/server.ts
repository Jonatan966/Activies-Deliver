import express from "express";
import multer from "multer";
const app = express();

const uploadConfigs = multer({ dest: "uploads/" })

import { router } from "./routes";

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Servidor está rodando"));