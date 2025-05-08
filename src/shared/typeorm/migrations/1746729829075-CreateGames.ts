import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGames1746729829075 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "games",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{
						name: "date",
						type: "date",
						isNullable: false,
					},
					{
						name: "team_away_id",
						type: "uuid",
						isNullable: false,
					},
					{
						name: "team_home_id",
						type: "uuid",
						isNullable: false,
					},
					{
						name: "winner_id",
						type: "uuid",
					},
					{
						name: "week",
						type: "int",
						isNullable: false,
					},
					{ name: "created_at", type: "timestamp", default: "now()" },
                    { name: "update_at", type: "timestamp", default: "now()" }
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		queryRunner.dropTable("games");
	}
}
