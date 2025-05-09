import Team from "@modules/teams/typeorm/entities/Team";
import TeamRepository from "@modules/teams/typeorm/repository/TeamsRepository";
import { getCustomRepository } from "typeorm";
export default class ListTeamService {
	public async execute(): Promise<Team[]> {
		const teamRepository = getCustomRepository(TeamRepository);
		const teams = await teamRepository.find();
		return teams;
	}
}
