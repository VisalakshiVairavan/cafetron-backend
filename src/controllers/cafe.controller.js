import { getMultipleCafe } from "../services/cafe.services.js";

export async function getCafe(req, res, next) {
  try {
    const results = await getMultipleCafe(req.query.location);
    res.json(results);
  } catch (err) {
    console.error(`Error while getting cafe`, err.message);
    next(err);
  }
}
