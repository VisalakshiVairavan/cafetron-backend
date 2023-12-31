import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let globalPool = undefined;

async function dbConnection() {
  if (typeof globalPool !== "undefined") {
    return globalPool;
  }

  globalPool = await createPool(process.env.DATABASE_URL);
  return globalPool;
}

export async function dbQuery(sql, params) {
  const conn = await dbConnection();
  console.log("sql",sql);
  const [result] = await conn.query(sql, params);
  console.log("sql executed");
  return result;
}
