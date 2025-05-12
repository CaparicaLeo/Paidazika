import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1746731896514 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.createTable(
			new Table({
				name: "users",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{
						name: "name",
						type: "varchar",
						isNullable: true,
						isUnique: true,
					},
					{ name: "email", type: "varchar", isUnique: true },
					{ name: "type", type: "varchar", isNullable: true },
					{ name: "password", type: "varchar", isNullable: false },
					{ name: "ranking_position", type: "int" },
					{ name: "points", type: "int" },
					{ name: "avatar", type: "varchar", isNullable: true },
					{
						name: "term_guess",
						type: "timestamp",
						isNullable: true,
					},
					{ name: "created_at", type: "timestamp", default: "now()" },
					{ name: "update_at", type: "timestamp", default: "now()" },
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		queryRunner.dropTable("users");
	}
}
