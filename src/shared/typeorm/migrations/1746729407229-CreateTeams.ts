import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTeams1746729407229 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "teams",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{ name: "name", type: "varchar" , isPrimary:true},
					{ name: "avatar", type: "varchar", isNullable: true },
					{ name: "created_at", type: "timestamp", default: "now()" },
					{ name: "update_at", type: "timestamp", default: "now()" },
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teams');
    }
}
