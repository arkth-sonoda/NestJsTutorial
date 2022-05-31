import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLike1653958740765 implements MigrationInterface {
    name = 'CreateLike1653958740765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`like\` (\`id\` int NOT NULL AUTO_INCREMENT, \`likedUserId\` varchar(255) NOT NULL, \`targetBookId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`like\``);
    }

}
