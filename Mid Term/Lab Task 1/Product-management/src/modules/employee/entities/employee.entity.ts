import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// This class is the "employees" table in the database
@Entity({ name: "employees" })
export class Employee {
  // id is created automatically by the database
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  // This is only a dummy password for the lab
  @Column()
  password!: string;

  @Column({ type: "int" })
  age!: number;

  // Number of completed years of work experience
  @Column({ type: "int" })
  yearsOfWorking!: number;
}