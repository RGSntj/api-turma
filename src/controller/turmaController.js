import { Router } from "express";
import {
  consultarTurmaPeloAno,
  inserirTurma,
} from "../repository/turmaRepository.js";

const endpoints = Router();

endpoints.post("/turma", async (req, resp) => {
  const turma = req.body;

  try {
    const idTurma = await inserirTurma(turma);

    return resp.status(201).send({
      id: idTurma,
    });
  } catch (error) {
    return resp.status(400).send({
      err: error.message,
    });
  }
});

endpoints.get("/turma/busca", async (req, resp) => {
  const ano = req.query.ano;

  try {
    const registros = await consultarTurmaPeloAno(ano);

    return resp.send(registros);
  } catch (error) {
    return resp.status(400).send({
      err: error.message,
    });
  }
});

export default endpoints;
