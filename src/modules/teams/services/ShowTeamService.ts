import Team from "@modules/teams/typeorm/entities/Team";
import TeamRepository from "@modules/teams/typeorm/repository/TeamsRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
 
interface IRequest {
	id: string;
}

export default class ShowTeamService {
	public async execute({id}: IRequest){
		const teamRepository = getCustomRepository(TeamRepository);
		const team = teamRepository.findOne(id);
		if (!team) {
			throw new AppError("Team not found");
		}
		return team;
	}
}
