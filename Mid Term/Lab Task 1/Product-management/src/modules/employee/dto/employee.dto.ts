import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

// Data needed to create an employee (all fields are required)
export class CreateEmployeeDto {
  @IsNotEmpty({ message: "Name is a mandatory field" })
  @IsString()
  name!: string;

  @IsNotEmpty({ message: "Email is a mandatory field" })
  @IsString()
  email!: string;

  @IsNotEmpty({ message: "Phone is a mandatory field" })
  @IsString()
  phone!: string;

  @IsNotEmpty({ message: "Password is a mandatory field" })
  @IsString()
  password!: string;

  @IsInt()
  age!: number;

  @IsInt()
  yearsOfWorking!: number;
}

// Data used to update an employee (all fields are optional)
export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsInt()
  yearsOfWorking?: number;
}