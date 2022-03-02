import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class relacionInfoSpecialties1646016796262
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "InfoDoctors-Specialties",
        columns: [
          {
            name: "id_doctor",
            type: "uuid",
          },
          {
            name: "id_specialties",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "fk_infodoctor",
            columnNames: ["id_doctor"],
            referencedTableName: "InfoDoctors",
            referencedColumnNames: ["id"],
          },
          {
            name: "fk_specialties",
            columnNames: ["id_specialties"],
            referencedTableName: "specialties",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("DROP TABLE adress");
  }
}
