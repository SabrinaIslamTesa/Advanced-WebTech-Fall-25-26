import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseUUIDPipe,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

// All routes in this file start with /employees
@Controller("employees")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // POST /employees
  @Post()
  async createEmployee(@Body(ValidationPipe) dto: CreateEmployeeDto) {
    return await this.employeeService.createEmployee(dto);
  }

  // GET /employees
  @Get()
  async getEmployees() {
    return await this.employeeService.getEmployees();
  }

  // GET /employees/:id
  @Get(":id")
  async getEmployeeById(@Param("id", ParseUUIDPipe) id: string) {
    return await this.employeeService.getEmployeeById(id);
  }

  // PATCH /employees/:id
  @Patch(":id")
  async updateEmployee(
    @Param("id", ParseUUIDPipe) id: string,
    @Body(ValidationPipe) dto: UpdateEmployeeDto,
  ) {
    return await this.employeeService.updateEmployee(id, dto);
  }

  // DELETE /employees/:id
  @Delete(":id")
  async deleteEmployee(@Param("id", ParseUUIDPipe) id: string) {
    return await this.employeeService.deleteEmployee(id);
  }
}