import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

// Data needed to create an employee (all fields are required)
export class CreateEmployeeDto {
  @IsNotEmpty({ message: "Name is a mandatory field" })
  @IsString()
  name!: string;

  @IsEmail({}, { message: "Email must be a valid email address" })
  email!: string;

  @IsNotEmpty({ message: "Phone is a mandatory field" })
  @IsString()
  phone!: string;

  @IsNotEmpty({ message: "Password is a mandatory field" })
  @IsString()
  password!: string;

  @IsInt()
  @Min(0)
  age!: number;

  @IsInt()
  @Min(0)
  yearsOfWorking!: number;
}

// Data used to update an employee (all fields are optional)
export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: "Email must be a valid email address" })
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  yearsOfWorking?: number;
}