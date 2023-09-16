import {
  getMultipleEmployee,
  insertEmployee,
  updateEmployee,
  deleteEmployee as deleteEmployeeFromDB,
} from "../services/employee.services.js";

export async function getEmployee(req, res, next) {
  try {
    const results = await getMultipleEmployee(req.query.cafe_id);
    res.json(results);
  } catch (err) {
    console.error(`Error while getting cafe`, err.message);
    next(err);
  }
}

export async function postEmployee(req, res, next) {
  try {
    const results = await insertEmployee(req.body);
    res.json(results);
  } catch (err) {
    console.error(`Error while posting cafe`, err.message);
    next(err);
  }
}

export async function putEmployee(req, res, next) {
  try {
    const results = await updateEmployee(req.body);
    res.json(results);
  } catch (err) {
    console.error(`Error while updating cafe`, err.message);
    next(err);
  }
}

export async function deleteEmployee(req, res, next) {
  try {
    const results = await deleteEmployeeFromDB(req.query.employee_id);
    res.json(results);
  } catch (err) {
    console.error(`Error while deleting cafe`, err.message);
    next(err);
  }
}
