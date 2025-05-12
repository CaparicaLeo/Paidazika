import { getCustomRepository } from "typeorm";
import Team from "../typeorm/entities/Team";
import TeamRepository from "../typeorm/repository/TeamsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
	id: string;
	name: string;
	avatar: string;
}
export default class UpdateTeamService {
	public async execute({ id, name, avatar }: IRequest) {
		const teamRepository = getCustomRepository(TeamRepository);
		const team = await teamRepository.findOne(id);
		if (!team) {
			throw new AppError("Team not found");
		}
		const teamsExists = await teamRepository.findByName(name);
		if (teamsExists && name != team.name) {
			throw new AppError("This is already one team with this name");
		}
		team.name = name;
		team.avatar = avatar;
		await teamRepository.save(team);
		return team;
	}
}
