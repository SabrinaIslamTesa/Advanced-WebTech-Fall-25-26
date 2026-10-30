import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,

} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

// All routes in this file start with /products
@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // POST /products
  @Post()
  async createProduct(@Body(ValidationPipe) dto: CreateProductDto) {
    return await this.productService.createProduct(dto);
  }

  // GET /products
  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  // GET /products/:id
  @Get(":id")
  async getProductById(@Param("id") id: string) {
    return await this.productService.getProductById(id);
  }

  // PATCH /products/:id
  @Patch(":id")
  async updateProduct(
    @Param("id") id: string,
    @Body(ValidationPipe) dto: UpdateProductDto,
  ) {
    return await this.productService.updateProduct(id, dto);
  }

  // DELETE /products/:id
  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productService.deleteProduct(id);
  }
}