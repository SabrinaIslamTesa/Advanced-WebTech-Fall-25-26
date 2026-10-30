import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// This class is the "products" table in the database
@Entity({ name: "products" })
export class Product {
  // id is created automatically by the database
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  // float is used so price can have decimal values like 99.5
  @Column({ type: "float" })
  price!: number;

  // int is used because quantity is a whole number
  @Column({ type: "int" })
  quantity!: number;
}