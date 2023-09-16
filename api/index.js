import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cafeRouter from "./routes/cafe.route.js";
import employeeRouter from "./routes/employee.route.js";
import cors from "cors";
import { dbHeartBeat } from "./utils/heart-beat.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});



app.use("/cafe", cafeRouter);
app.use("/employee", employeeRouter);

app.get("/", (req, res) => {
  res.json({ message: "***Cafetron backed is up***" });
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Cafetron app listening at http://localhost:${port}`);
  dbHeartBeat();
});

export default app;