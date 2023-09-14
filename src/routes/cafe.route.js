import express from "express";
import { getCafe } from "../controllers/cafe.controller.js";
const cafeRouter = express.Router();

cafeRouter.get("/", getCafe);

export default cafeRouter;
