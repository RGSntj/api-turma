import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: process.env.SQLHOST,
  user: process.env.SQLUSER,
  password: process.env.SQLPWD,
  database: process.env.SQLDB,
});

console.log("-> Conexão realizada com sucesso <-");
