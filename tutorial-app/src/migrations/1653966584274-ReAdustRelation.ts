import {MigrationInterface, QueryRunner} from "typeorm";

export class ReAdustRelation1653966584274 implements MigrationInterface {
    name = 'ReAdustRelation1653966584274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_a25a146cb620a01c1d61bab7cdc\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_b55e76faf2f61c08599d230ccbf\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`likedUserIdId\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`targetBookIdId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`bookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_e8fb739f08d47955a39850fac23\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_2c529ad367a3f97cc0d54d164e6\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_2c529ad367a3f97cc0d54d164e6\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_e8fb739f08d47955a39850fac23\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`bookId\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`targetBookIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD \`likedUserIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_b55e76faf2f61c08599d230ccbf\` FOREIGN KEY (\`targetBookIdId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_a25a146cb620a01c1d61bab7cdc\` FOREIGN KEY (\`likedUserIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
