module.exports = class Migrations1743962419442 {
    name = 'Migrations1743962419442'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "dance" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "landId" integer, CONSTRAINT "PK_73bb66fed4857dbd57c4aaac647" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "land" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "regionId" integer, CONSTRAINT "PK_a6b43171b11dc6bab4a449e7b79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dialect" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_091d205f09398c89ac94c49f978" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "area" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "dialectId" integer, CONSTRAINT "PK_39d5e4de490139d6535d75f42ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "region" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "areaId" integer, CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dance" ADD CONSTRAINT "FK_fdb0b6cceb01e75f1727e731a25" FOREIGN KEY ("landId") REFERENCES "land"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "land" ADD CONSTRAINT "FK_557d484afad0b3dc1026176326e" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "area" ADD CONSTRAINT "FK_d3bd770782aac096e4568da079b" FOREIGN KEY ("dialectId") REFERENCES "dialect"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region" ADD CONSTRAINT "FK_3476e46cf3992df1ce6bd32a913" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "region" DROP CONSTRAINT "FK_3476e46cf3992df1ce6bd32a913"`);
        await queryRunner.query(`ALTER TABLE "area" DROP CONSTRAINT "FK_d3bd770782aac096e4568da079b"`);
        await queryRunner.query(`ALTER TABLE "land" DROP CONSTRAINT "FK_557d484afad0b3dc1026176326e"`);
        await queryRunner.query(`ALTER TABLE "dance" DROP CONSTRAINT "FK_fdb0b6cceb01e75f1727e731a25"`);
        await queryRunner.query(`DROP TABLE "region"`);
        await queryRunner.query(`DROP TABLE "area"`);
        await queryRunner.query(`DROP TABLE "dialect"`);
        await queryRunner.query(`DROP TABLE "land"`);
        await queryRunner.query(`DROP TABLE "dance"`);
    }
}
