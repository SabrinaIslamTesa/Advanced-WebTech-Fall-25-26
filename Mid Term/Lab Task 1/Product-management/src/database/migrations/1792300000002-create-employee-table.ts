import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeeTable1792300000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // This is needed for uuid_generate_v4() to work
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "age",
            type: "int",
            isNullable: false,
          },
          {
            // The database uses snake case, so yearsOfWorking becomes years_of_working
            name: "years_of_working",
            type: "int",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
  }
}