import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelation1653961425536 implements MigrationInterface {
    name = 'AddRelation1653961425536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`likedUserId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`likedUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`targetBookId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`targetBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_998ed07975b713b5bbc557cbb2e\` FOREIGN KEY (\`likedUserId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_d9654e0ea8fb02f3386c5452054\` FOREIGN KEY (\`targetBookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_d9654e0ea8fb02f3386c5452054\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_998ed07975b713b5bbc557cbb2e\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`targetBookId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`targetBookId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`likedUserId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`likedUserId\` varchar(255) NOT NULL`);
    }

}
