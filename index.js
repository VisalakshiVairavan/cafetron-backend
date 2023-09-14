import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cafeRouter from "./src/routes/cafe.route.js";
import employeeRouter from "./src/routes/employee.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/cafe", cafeRouter);
app.use("/employee", employeeRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Cafetron app listening at http://localhost:${port}`);
});
