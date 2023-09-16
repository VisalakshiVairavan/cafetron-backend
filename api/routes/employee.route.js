import express from "express";
import {
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
} from "../controllers/employee.controller.js";

const EmployeeRouter = express.Router();

EmployeeRouter.get("/", getEmployee);

EmployeeRouter.post("/", postEmployee);

EmployeeRouter.put("/", putEmployee);

EmployeeRouter.delete("/", deleteEmployee);

export default EmployeeRouter;
