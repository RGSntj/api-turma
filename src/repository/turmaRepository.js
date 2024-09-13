import { db } from "../db/connection.js";

export async function inserirTurma(turma) {
  const comando = `INSERT INTO tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
                        VALUES (?, ?, ?, ?, ?, SYSDATE())`;

  const resposta = await db.query(comando, [
    turma.turma,
    turma.curso,
    turma.ano,
    turma.capacidade,
    turma.ativo,
  ]);

  return resposta[0].insertId;
}

export async function consultarTurmaPeloAno(ano) {
  const comando = `SELECT *
                      FROM tb_turma
                        WHERE nr_ano_letivo = ?`;

  const registros = await db.query(comando, [ano]);
  return registros[0];
}
