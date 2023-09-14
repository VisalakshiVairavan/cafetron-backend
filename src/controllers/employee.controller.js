import { getMultipleEmployee } from "../services/employee.services.js";

export async function getEmployee(req, res, next) {
  try {
    const results = await getMultipleEmployee(req.query.cafe_id);
    res.json(results);
  } catch (err) {
    console.error(`Error while getting cafe`, err.message);
    next(err);
  }
}
