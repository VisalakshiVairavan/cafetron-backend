import express from "express";
import { getCafe, postCafe , putCafe, deleteCafe} from "../controllers/cafe.controller.js";
const cafeRouter = express.Router();

cafeRouter.get("/", getCafe);

cafeRouter.post("/", postCafe);

cafeRouter.put("/", putCafe);

cafeRouter.delete("/", deleteCafe);


export default cafeRouter;
