import {
  createCafe,
  createEmployee,
  createEmployeeCafe,
  insertCafeSQL,
  insertEmployeeDQL,
  insertEmployeeCafeSQL,
  dropCafeSQL,
  dropEmployeeSQL,
  dropEmployeeCafeSQL,
} from "./sql.js";

import { seedData } from "./seed_data.js";
import { dbQuery } from "../services/db.services.js";

const loadAndSaveData = async () => {
  try {
    // Clear old data
    await dbQuery(dropCafeSQL);
    console.log("***dropped Cafe table***");

    await dbQuery(dropEmployeeSQL);
    console.log("***dropped employee table***");

    await dbQuery(dropEmployeeCafeSQL);
    console.log("***dropped employee cafe table***");

    // Create tables
    await dbQuery(createCafe);
    console.log("***created cafe table***");

    await dbQuery(createEmployee);
    console.log("***created employee table***");

    await dbQuery(createEmployeeCafe);
    console.log("***created employee cafe table***");

    const { cafe, employee, employeeCafe } = seedData;

    // Insert seed data
    await dbQuery(insertCafeSQL, [getInsertData(cafe)]);
    console.log("***cafe saved***");

    await dbQuery(insertEmployeeDQL, [getInsertData(employee)]);
    console.log("***employee saved***");

    await dbQuery(insertEmployeeCafeSQL, [getInsertData(employeeCafe)]);
    console.log("***employeeCafe saved***");
  } catch (err) {
    console.error(err);
  }
};

const getInsertData = (data) => {
  return data.map((obj) => Object.values(obj));
};

await loadAndSaveData();
process.exit(0);
