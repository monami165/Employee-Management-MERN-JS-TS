import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employee.route.js";
import morgan from "morgan";
import ErrorHandler from "./errors/error.handler.js";
import ErrorResponse from "./errors/error.response.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/employees", employeeRoutes);

app.use((req, res, next) => {
  next(new ErrorResponse("Not found", 404));
});

app.use(ErrorHandler);

export default app;
