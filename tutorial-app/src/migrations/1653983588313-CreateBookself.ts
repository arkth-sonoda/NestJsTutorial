import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBookself1653983588313 implements MigrationInterface {
    name = 'CreateBookself1653983588313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`bookshelf\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book_bookshelves_bookshelf\` (\`bookId\` int NOT NULL, \`bookshelfId\` int NOT NULL, INDEX \`IDX_6c4456d15bd7c3d71401fe7256\` (\`bookId\`), INDEX \`IDX_6245b1b12436a3d7d3fac09253\` (\`bookshelfId\`), PRIMARY KEY (\`bookId\`, \`bookshelfId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`book_bookshelves_bookshelf\` ADD CONSTRAINT \`FK_6c4456d15bd7c3d71401fe72563\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`book_bookshelves_bookshelf\` ADD CONSTRAINT \`FK_6245b1b12436a3d7d3fac092530\` FOREIGN KEY (\`bookshelfId\`) REFERENCES \`bookshelf\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_bookshelves_bookshelf\` DROP FOREIGN KEY \`FK_6245b1b12436a3d7d3fac092530\``);
        await queryRunner.query(`ALTER TABLE \`book_bookshelves_bookshelf\` DROP FOREIGN KEY \`FK_6c4456d15bd7c3d71401fe72563\``);
        await queryRunner.query(`DROP INDEX \`IDX_6245b1b12436a3d7d3fac09253\` ON \`book_bookshelves_bookshelf\``);
        await queryRunner.query(`DROP INDEX \`IDX_6c4456d15bd7c3d71401fe7256\` ON \`book_bookshelves_bookshelf\``);
        await queryRunner.query(`DROP TABLE \`book_bookshelves_bookshelf\``);
        await queryRunner.query(`DROP TABLE \`bookshelf\``);
    }

}
