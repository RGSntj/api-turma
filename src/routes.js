import turmaController from "./controller/turmaController.js";
import matriculaController from "./controller/matriculaController.js";

export function adicionarRotas(servidor) {
  servidor.use(turmaController);
  servidor.use(matriculaController);
}
