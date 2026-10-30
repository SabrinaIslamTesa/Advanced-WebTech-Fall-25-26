import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

// Data needed to create a product (all fields are required)
export class CreateProductDto {
  @IsNotEmpty({ message: "Name is a mandatory field" })
  @IsString()
  name!: string;

  @IsNotEmpty({ message: "Category is a mandatory field" })
  @IsString()
  category!: string;

  @IsNumber()
  price!: number;

  @IsInt()
  quantity!: number;
}

// Data used to update a product (all fields are optional)
export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsInt()
  quantity?: number;
}