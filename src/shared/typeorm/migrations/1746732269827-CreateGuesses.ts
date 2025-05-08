import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGuesses1746732269827 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.createTable(
			new Table({
				name: "guesses",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{ name: "user_id", type: "uuid", isNullable: false },
					{ name: "game_id", type: "uuid", isNullable: false },
					{ name: "guess_id", type: "uuid", isNullable: true },
					{ name: "is_tie", type: "bool", isNullable: true },
					{ name: "week", type: "int", isNullable: false },
					{ name: "created_at", type: "timestamp", default: "now()" },
					{ name: "update_at", type: "timestamp", default: "now()" }
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		queryRunner.dropTable("guesses");
	}
}
