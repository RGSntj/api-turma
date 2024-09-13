import { Router } from "express";
import {
  atualizarTurma,
  consultarTurmaPeloAno,
  consultarTurmas,
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

endpoints.get("/turma", async (req, resp) => {
  try {
    const registros = await consultarTurmas();

    return resp.send(registros);
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

endpoints.put("turma/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let turma = req.body;

    let linhasafetadas = await atualizarTurma(id, turma);
  } catch (error) {
    return resp.status(400).send({
      err: error.message,
    });
  }
});

export default endpoints;
