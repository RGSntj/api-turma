import express from "express";

import { adicionarRotas } from "./routes.js";

const app = express();
app.use(express.json());

adicionarRotas(app);

app.listen(process.env.PORTA, () =>
  console.log(`Servidor rodando na porta ${process.env.PORTA}`)
);
