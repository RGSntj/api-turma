import { Router } from "express";
import {
  consultarMatriculas,
  inserirMatricula,
} from "../repository/matriculaRepository.js";

const endpoints = Router();

endpoints.post("/aluno", async (req, resp) => {
  const matricula = req.body;

  try {
    const idMatricula = await inserirMatricula(matricula);

    return resp.status(201).send({
      id: idMatricula,
    });
  } catch (error) {
    return resp.status(400).send({
      err: error.message,
    });
  }
});

endpoints.get("/aluno", async (req, resp) => {
  try {
    const registros = await consultarMatriculas();

    return resp.send(registros);
  } catch (error) {
    return resp.status(400).send({
      err: error.message,
    });
  }
});

export default endpoints;
