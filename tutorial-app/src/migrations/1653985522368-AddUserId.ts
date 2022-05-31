import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserId1653985522368 implements MigrationInterface {
    name = 'AddUserId1653985522368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookshelf\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`bookshelf\` ADD UNIQUE INDEX \`IDX_bb15b6fbe3a84b23109aae66fc\` (\`userId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_bb15b6fbe3a84b23109aae66fc\` ON \`bookshelf\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`bookshelf\` ADD CONSTRAINT \`FK_bb15b6fbe3a84b23109aae66fce\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookshelf\` DROP FOREIGN KEY \`FK_bb15b6fbe3a84b23109aae66fce\``);
        await queryRunner.query(`DROP INDEX \`REL_bb15b6fbe3a84b23109aae66fc\` ON \`bookshelf\``);
        await queryRunner.query(`ALTER TABLE \`bookshelf\` DROP INDEX \`IDX_bb15b6fbe3a84b23109aae66fc\``);
        await queryRunner.query(`ALTER TABLE \`bookshelf\` DROP COLUMN \`userId\``);
    }

}
