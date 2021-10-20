import mongoose from "mongoose";
import Employee from "../models/employee.model.js";
import asyncHandler from "../errors/async.handler.js";
import ErrorResponse from "../errors/error.response.js";

export const getEmployee = asyncHandler(async (req, res, next) => {
  const employees = await Employee.find();

  res.status(200).json(employees);
});

export const createEmployee = asyncHandler(async (req, res, next) => {
  const { empId } = req.body;
  const employee = new Employee(req.body);

  var count = await Employee.countDocuments({ empId: { $eq: empId } });

  if (count >= 1) {
    next(new ErrorResponse("Duplicate ID detected or ID is not valid", 406));
    return;
  }

  await employee.save();

  res.status(200).json(employee);
});

export const updateEmployee = asyncHandler(async (req, res, next) => {
  const { id: _id } = req.params;
  const employee = req.body;

  var count = await Employee.countDocuments({ _id: { $eq: _id } });

  if (!mongoose.Types.ObjectId.isValid(_id) || count < 1) {
    next(new ErrorResponse("Cannot find employee with that ID", 406));
    return;
  }

  const updatedEmployee = await Employee.findByIdAndUpdate(
    _id,
    { ...employee, _id },
    {
      new: true,
    }
  );

  res.status(200).json(updatedEmployee);
});

export const deleteEmployee = asyncHandler(async (req, res, next) => {
  const { id: _id } = req.params;

  var count = await Employee.countDocuments({ _id: { $eq: _id } });

  if (!mongoose.Types.ObjectId.isValid(_id) || count < 1) {
    next(new ErrorResponse("Cannot find employee with that ID", 406));
    return;
  }

  await Employee.findByIdAndRemove(_id);

  res.status(200).json({ message: "Post deleted successfully" });
});
