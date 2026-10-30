import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Get all products
  async getProducts() {
    try {
      const products = await this.productRepository.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  // Get one product by id
  async getProductById(id: string) {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!product) {
        throw new NotFoundException("Product not found");
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  // Create and save a new product
  async createProduct(dto: CreateProductDto) {
    try {
      const response = this.productRepository.create(dto);
      return await this.productRepository.save(response);
    } catch (error) {
      throw error;
    }
  }

  // Update a product
  async updateProduct(id: string, dto: UpdateProductDto) {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!product) {
        throw new NotFoundException("Product not found");
      }
      // Copy the new values into the old product, then save it
      Object.assign(product, dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

  // Delete a product
  async deleteProduct(id: string) {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!product) {
        throw new NotFoundException("Product not found");
      }
      await this.productRepository.delete({ id: id });
      return { message: "Product deleted successfully" };
    } catch (error) {
      throw error;
    }
  }
}