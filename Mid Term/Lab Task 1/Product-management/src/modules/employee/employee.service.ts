import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Get all employees
  async getEmployees() {
    try {
      const employees = await this.employeeRepository.find();
      return employees;
    } catch (error) {
      throw error;
    }
  }

  // Get one employee by id
  async getEmployeeById(id: string) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!employee) {
        throw new NotFoundException("Employee not found");
      }
      return employee;
    } catch (error) {
      throw error;
    }
  }

  // Create and save a new employee
  async createEmployee(dto: CreateEmployeeDto) {
    try {
      const response = this.employeeRepository.create(dto);
      return await this.employeeRepository.save(response);
    } catch (error) {
      throw error;
    }
  }

  // Update an employee
  async updateEmployee(id: string, dto: UpdateEmployeeDto) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!employee) {
        throw new NotFoundException("Employee not found");
      }
      // Copy the new values into the old employee, then save it
      Object.assign(employee, dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  // Delete an employee
  async deleteEmployee(id: string) {
    try {
      const employee = await this.employeeRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!employee) {
        throw new NotFoundException("Employee not found");
      }
      await this.employeeRepository.delete({ id: id });
      return { message: "Employee deleted successfully" };
    } catch (error) {
      throw error;
    }
  }
}