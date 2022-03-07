import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInfoMedicos1646007585082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "InfoDoctors",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "crm",
            type: "bigint",
          },
          {
            name: "telFixo",
            type: "bigint",
            isNullable: false,
          },
          {
            name: "telCelular",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "Updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("DROP TABLE InfoDoctors");
  }
}
