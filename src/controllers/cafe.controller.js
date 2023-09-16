import {
  getMultipleCafe,
  insertCafe,
  updateCafe,
  deleteCafe as deleteCafeFromDB,
} from "../services/cafe.services.js";

export async function getCafe(req, res, next) {
  try {
    const results = await getMultipleCafe(req.query.location);
    res.json(results);
  } catch (err) {
    console.error(`Error while getting cafe`, err.message);
    next(err);
  }
}

export async function postCafe(req, res, next) {
  try {
    const results = await insertCafe(req.body);
    res.json(results);
  } catch (err) {
    console.error(`Error while posting cafe`, err.message);
    next(err);
  }
}

export async function putCafe(req, res, next) {
  try {
    const results = await updateCafe(req.body);
    res.json(results);
  } catch (err) {
    console.error(`Error while updating cafe`, err.message);
    next(err);
  }
}

export async function deleteCafe(req, res, next) {
  try {
    const results = await deleteCafeFromDB(req.query.cafe_id);
    res.json(results);
  } catch (err) {
    console.error(`Error while deleting cafe`, err.message);
    next(err);
  }
}
