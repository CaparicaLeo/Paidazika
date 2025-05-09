import TeamRepository from "@modules/teams/typeorm/repository/TeamsRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

interface IRequest {
	name: string;
}
export default class CreateTeamService {
	public async execute({ name }: IRequest) {
		const teamsRepository = getCustomRepository(TeamRepository);
		const teamsExist = await teamsRepository.findByName(name);
		if (teamsExist) {
			throw new AppError("This is already one team with this name");
		}
		const team = await teamsRepository.create({ name});
		await teamsRepository.save(team);
		return team;
	}
}
