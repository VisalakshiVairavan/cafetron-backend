import { dbQuery } from "./db.services.js";
import mysql from "mysql2/promise";

export async function getMultipleCafe(location) {
  let selectCafe = `
  SELECT cafe.*, COUNT(employee_id) AS emp_count
  FROM cafe LEFT JOIN employee_cafe 
  ON cafe.id = employee_cafe.cafe_id `;

  if (location) {
    selectCafe += `WHERE location = ${mysql.escape(location.toLowerCase())} `;
  }

  selectCafe += `
  GROUP BY cafe.id
  ORDER BY emp_count desc`;

  return await dbQuery(selectCafe);
}
