import { dbQuery } from "./db.services.js";
import mysql from "mysql2/promise";
import { empIdGen } from "../utils/helper.js";

export async function getMultipleEmployee(cafeId) {
  let selectEmployee = `
  SELECT employee.*, DATEDIFF(NOW(), employee_cafe.start_date)  AS 'days_worked' , cafe.name AS cafe_name , BIN_TO_UUID(cafe.id) as cafe_id 
  FROM employee LEFT JOIN employee_cafe  
  ON employee.id = employee_cafe.employee_id LEFT JOIN cafe ON cafe.id = employee_cafe.cafe_id   `;

  if (cafeId) {
    selectEmployee += `WHERE cafe_id = UUID_TO_BIN(${mysql.escape(cafeId)}) `;
  }

  selectEmployee += `
  ORDER BY days_worked desc`;

  return await dbQuery(selectEmployee);
}

export async function insertEmployee(employee) {
  if (
    !employee.name ||
    !employee.phone_number ||
    !employee.gender ||
    !employee.email_address
  ) {
    throw Error("Required fields missing");
  }

  const insertString =
    "INSERT INTO employee (id, name, phone_number, gender, email_address) VALUES ?";

  const empId = empIdGen();
  const result = await dbQuery(insertString, [
    [[empId, employee.name, employee.phone_number, employee.gender, employee.email_address]],
  ]);
  console.log("result", result);

  if (employee.cafe_id) {
    const insertEmployeeCafe =
      "INSERT INTO employee_cafe (employee_id,cafe_id) VALUES (?, UUID_TO_BIN(?))";
    await dbQuery(insertEmployeeCafe, [empId, employee.cafe_id]);
  }

  return result;
}


export async function updateEmployee(employee) {
  if (
    !employee.id ||
    !employee.name ||
    !employee.phone_number ||
    !employee.gender ||
    !employee.email_address
  ) {
    throw Error("Required fields missing");
  }
  const checkEmployeeExits = "SELECT id FROM employee WHERE id = ?";

  const employeeFromDB = await dbQuery(checkEmployeeExits, employee.id);
  if (!employeeFromDB || !employeeFromDB.length) {
    throw Error("Employee not found");
  }

  const updateString =
    "UPDATE employee SET  name = ?, phone_number = ?, gender = ?, email_address = ? WHERE id = ?;";

  if (employee.cafe_id) {
    const updateEmployeeCafe =
      "UPDATE employee_cafe SET cafe_id = UUID_TO_BIN(?) WHERE employee_id = ? ";
    await dbQuery(updateEmployeeCafe, [employee.cafe_id, employee.id]);
  } else {
    const deleteEmployeeCafe =
      "DELETE FROM employee_cafe WHERE employee_id = ?";
    await dbQuery(deleteEmployeeCafe, [employee.id]);
  }

  return await dbQuery(updateString, [
    employee.name,
    employee.phone_number,
    employee.gender,
    employee.email_address,
    employee.id,
  ]);
}

export async function deleteEmployee(employeeId) {
  const deleteString = "DELETE FROM employee WHERE id = ? ";
  return await dbQuery(deleteString, [employeeId]);
}
