import { EntityRepository, Repository } from "typeorm";
import Team from "src/modules/teams/typeorm/entities/Team";

@EntityRepository(Team)
export default class TeamRepository extends Repository<Team> {
	public async findByName(name: string): Promise<Team | undefined> {
		const team = this.findOne({ where: { name } });
		return team;
	}
}
