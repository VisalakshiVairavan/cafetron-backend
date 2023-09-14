import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

export async function dbQuery(sql, params) {
  const [results, ] = await connection.query(sql, params);
  return results;
}

