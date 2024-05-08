import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserRole1715169563102 implements MigrationInterface {
    name = 'addUserRole1715169563102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'member') NOT NULL DEFAULT 'member'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
