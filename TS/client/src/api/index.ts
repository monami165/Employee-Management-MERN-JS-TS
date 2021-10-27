import axios from "axios";
import { Employee } from "../interfaces/EmployeeInterface";

const url = "http://localhost:3001/employee";

export const fetchEmployees = async () => {
  return axios.get<Employee[]>(url);
};

export const createEmployee = (newEmployee: Employee) =>
  axios.post<Employee>(url, newEmployee);

export const updateEmployee = (id: string, updatedEmployee: Employee) =>
  axios.patch<Employee>(`${url}/${id}`, updatedEmployee);

export const deleteEmployee = (id: string) =>
  axios.delete<string>(`${url}/${id}`);
