import { PrimaryColumn, Entity, Column } from "typeorm";

@Entity({ name: "employee" })
export class EmployeeEntity {
  @PrimaryColumn({ type: "varchar", length: 300 })
  empId: string;

  @Column({ type: "varchar", length: 300 })
  firstName: string;

  @Column({ type: "varchar", length: 300 })
  lastName: string;

  @Column({ type: "varchar", length: 300 })
  email: string;

  @Column({ type: "varchar", length: 300 })
  phoneNumber: string;

  @Column({ type: "varchar", length: 300 })
  dateJoined: string;
}
