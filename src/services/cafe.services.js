import { dbQuery } from "./db.services.js";
import mysql from "mysql2/promise";
import { getInData } from "../utils/helper.js";

export async function getMultipleCafe(location) {
  let selectCafe = `
  SELECT BIN_TO_UUID(cafe.id) as cafeId,cafe.name, cafe.description, cafe.location , COUNT(employee_id) AS employee_count
  FROM cafe LEFT JOIN employee_cafe 
  ON cafe.id = employee_cafe.cafe_id `;

  if (location) {
    selectCafe += `WHERE location = ${mysql.escape(location.toLowerCase())} `;
  }

  selectCafe += `
  GROUP BY cafe.id
  ORDER BY employee_count desc`;
  return await dbQuery(selectCafe);
}

export async function insertCafe(cafe) {
  if (!cafe.name || !cafe.description || !cafe.location) {
    throw Error("Required fields missing");
  }

  const insertString =
    "INSERT INTO cafe (name, description, location) VALUES ?";
  return await dbQuery(insertString, [
    [[cafe.name, cafe.description, cafe.location.toLowerCase()]],
  ]);
}

export async function updateCafe(cafe) {
  if (!cafe.id || !cafe.name || !cafe.description || !cafe.location) {
    throw Error("Required fields missing");
  }
  const checkCafeExits = "SELECT id FROM cafe WHERE id = UUID_TO_BIN(?)";

  const cafeFromDB = await dbQuery(checkCafeExits, cafe.id);
  if (!cafeFromDB || !cafeFromDB.length) {
    throw Error("Cafe not found");
  }

  let updateString =
    "UPDATE cafe SET location = ?, name = ?, description = ? WHERE id = UUID_TO_BIN(?);";

  return await dbQuery(updateString, [
    cafe.location.toLowerCase(),
    cafe.name,
    cafe.description,
    cafe.id,
  ]);
}

export async function deleteCafe(cafeId) {
  const empListString =
    "SELECT employee.id FROM employee JOIN employee_cafe ON employee.id = employee_cafe.employee_id WHERE cafe_id = UUID_TO_BIN(?)";
  const empList = await dbQuery(empListString, [cafeId]);
  if (empList && empList.length) {
    const deleteEmp = "DELETE FROM employee WHERE id IN (?) ";
    await dbQuery(deleteEmp, [getInData(empList)]);
  }
  const deleteString = "DELETE FROM cafe WHERE id = UUID_TO_BIN(?)";
  return await dbQuery(deleteString, [cafeId]);
}
