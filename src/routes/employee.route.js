import express from "express";
import { getEmployee } from "../controllers/employee.controller.js";
const EmployeeRouter = express.Router();

EmployeeRouter.get("/", getEmployee);

export default EmployeeRouter;
