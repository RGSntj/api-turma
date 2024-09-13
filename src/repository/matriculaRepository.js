import { db } from "../db/connection.js";

export async function inserirMatricula(matricula) {
  const comando = `INSERT INTO tb_matricula_aluno (nm_aluno, ds_sexo, dt_nascimento, ds_email, bt_ativo, id_turma)
                        VALUES (?, ?, ?, ?, ?, ?)`;

  const resposta = await db.query(comando, [
    matricula.aluno,
    matricula.sexo,
    matricula.nascimento,
    matricula.email,
    matricula.ativo,
    matricula.idTurma,
  ]);

  return resposta[0].insertId;
}

export async function consultarMatriculas() {
  const comando = `SELECT 	
                    A.nm_aluno 		nome, 
                    A.ds_sexo		  sexo,
                    A.dt_nascimento "Data de nascimento",
                    A.ds_email		"Email",
                    T.nm_turma		"Turma",
                    T.ds_curso		"Curso"
                      FROM tb_matricula_aluno A
                       JOIN tb_turma T ON A.id_turma = T.id_turma`;

  const registros = await db.query(comando);
  return registros[0];
}
