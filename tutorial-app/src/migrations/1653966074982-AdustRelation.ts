import {MigrationInterface, QueryRunner} from "typeorm";

export class AdustRelation1653966074982 implements MigrationInterface {
    name = 'AdustRelation1653966074982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_998ed07975b713b5bbc557cbb2e\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_d9654e0ea8fb02f3386c5452054\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`likedUserIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`targetBookIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`likedUserId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`likedUserId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`targetBookId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`targetBookId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_a25a146cb620a01c1d61bab7cdc\` FOREIGN KEY (\`likedUserIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_b55e76faf2f61c08599d230ccbf\` FOREIGN KEY (\`targetBookIdId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_b55e76faf2f61c08599d230ccbf\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_a25a146cb620a01c1d61bab7cdc\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`targetBookId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`targetBookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`likedUserId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`likedUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`targetBookIdId\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`likedUserIdId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_d9654e0ea8fb02f3386c5452054\` FOREIGN KEY (\`targetBookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_998ed07975b713b5bbc557cbb2e\` FOREIGN KEY (\`likedUserId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
