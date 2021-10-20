import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  empId: {
    type: String,
    required: [true, "Please provide an id for the employee"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Please provide a first name for the employee"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name for the employee"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email for the Employee"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a phone number for the Employee"],
  },
  dateJoined: {
    type: Date,
    required: [true, "Please provide a starting date for the Employee"],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
