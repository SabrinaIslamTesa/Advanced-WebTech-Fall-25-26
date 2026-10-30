import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1792300000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // This is needed for uuid_generate_v4() to work
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "products",
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
            name: "category",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "price",
            type: "float",
            isNullable: false,
          },
          {
            name: "quantity",
            type: "int",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}