import TeamRepository from "@modules/teams/typeorm/repository/TeamsRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import GamesRepository from "../typeorm/repositories/GamesRepository";

interface IRequest {
	team_away_name: string;
	team_home_name: string;
    date:Date;
    week:number;
}
export default class CreateGameService {
	public async execute({ team_away_name, team_home_name,date, week }: IRequest) {
		const team_away_id = await this.findTeam(team_away_name);
		const team_home_id = await this.findTeam(team_home_name);

        const gamesRepository = getCustomRepository(GamesRepository);
		if (!(team_away_id && team_home_id)) {
			throw new AppError("Team(s) not found.");
		}

        const game = await gamesRepository.create({team_away_id,team_home_id,date,week})
        await gamesRepository.save(game);
        return game;
	}
	private async findTeam(teamName: string): Promise<string> {
		const teamRepository = getCustomRepository(TeamRepository);
		const team = await teamRepository.findByName(teamName);

		if(!team){
			throw new AppError("Team not found");
		}
		return team.id;
	}
}
