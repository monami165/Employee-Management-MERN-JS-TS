import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { EmployeeService } from "./employee.service";
import { EmployeeEntity } from "src/entity/employee.entity";
@Crud({
  model: {
    type: EmployeeEntity,
  },
  params: {
    id: {
      field: "empId",
      type: "string",
      primary: true,
    },
  },
})
@Controller("employee")
export class EmployeeController {
  constructor(public service: EmployeeService) {}
}
