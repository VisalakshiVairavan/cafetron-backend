import {
  createCafe,
  createEmployee,
  createEmployeeCafe,
  insertCafeSQL,
  insertEmployeeSQL,
  insertEmployeeCafeSQL,
  dropCafeSQL,
  dropEmployeeSQL,
  dropEmployeeCafeSQL,
  selectAllCafeIDs,
  updateTop3EmployeeCafe,
  updateRestEmployeeCafe,
} from "./sql.js";

import { seedData } from "./seed_data.js";
import { dbQuery } from "../services/db.services.js";
import {getInsertData} from '../utils/helper.js';

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

    await dbQuery(insertEmployeeSQL, [getInsertData(employee)]);
    console.log("***employee saved***");

    await dbQuery(insertEmployeeCafeSQL, [getInsertData(employeeCafe)]);
    console.log("***employeeCafe saved***");

    const cafeIdString = await dbQuery(selectAllCafeIDs);
    await dbQuery(updateTop3EmployeeCafe, [cafeIdString[0].uuid_id]);
    await dbQuery(updateRestEmployeeCafe, [cafeIdString[1].uuid_id]);
    console.log("***employeeCafe cafe updated***");
    
  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
