import { dbQuery } from "./db.services.js";
import mysql from "mysql2/promise";

export async function getMultipleEmployee(cafeId) {
  let selectEmployee = `
  SELECT employee.*, DATEDIFF(NOW(), employee_cafe.start_date)  AS 'days_worked' , cafe.name AS cafe_name 
  FROM employee LEFT JOIN employee_cafe  
  ON employee.id = employee_cafe.employee_id LEFT JOIN cafe ON cafe.id = employee_cafe.cafe_id   `;

  if (cafeId) {
    selectEmployee += `WHERE cafe_id = ${mysql.escape(cafeId)} `;
  }

  selectEmployee += `
  ORDER BY days_worked desc`;

  return await dbQuery(selectEmployee);
}
