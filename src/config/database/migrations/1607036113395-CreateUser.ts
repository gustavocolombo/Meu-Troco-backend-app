import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1607036113395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
               {
                name: 'id',
                type: 'varchar',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
               },
               {
                   name: 'name',
                   type: 'varchar',
               },
               {
                   name: 'cpf',
                   type: 'varchar',
                   isNullable: false,
                   isUnique: true
               },{
                   name: 'password',
                   type: 'varchar',
                   isNullable: false
               }, {
                   name: 'birthday',
                   type: 'varchar',
               }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
