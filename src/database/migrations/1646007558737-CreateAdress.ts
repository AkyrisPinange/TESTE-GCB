import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdress1646007558705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'adress',
                columns:[
                    {
                        name: 'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                    },
                    {
                        name: "cep",
                        type: "varchar"
                    },
                    {
                       name:"logradouro",
                       type: "varchar"
                    },
                    {
                       name:"complemento",
                       type: "varchar"
                    },
                    {
                       name:"bairro",
                       type: "varchar"
                    },
                    {
                       name:"localidade",
                       type: "varchar"
                    },
                    {
                       name:"uf",
                       type: "varchar"
                    },
                    {
                       name:"id_doctor",
                       type: "uuid"
                    }

                    ],
                    foreignKeys: [
                        {
                          name:'fk_doctor',
                          columnNames:["id_doctor"],
                          referencedTableName:"InfoDoctors",
                          referencedColumnNames:["id"]  
                        }
                      ]
            })

        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("DROP TABLE adress")
    }

}
