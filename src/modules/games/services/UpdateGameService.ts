import TeamRepository from "@modules/teams/typeorm/repository/TeamsRepository";
import { getCustomRepository } from "typeorm";
import GamesRepository from "../typeorm/repositories/GamesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
	id: string;
	team_away_name: string;
	team_home_name: string;
	date: Date;
	winner_name: string;
	week: number;
}
export default class UpdateGameService {
	public async execute({
		id,
		team_away_name,
		team_home_name,
		date,
		winner_name,
		week,
	}: IRequest) {
		const gamesRepository = getCustomRepository(GamesRepository);
		const team_away_id = await this.findTeam(team_away_name);
		const team_home_id = await this.findTeam(team_home_name);
		const winner_id = await this.findTeam(winner_name);

		const game = await gamesRepository.findOne(id);
		if (!game) {
			throw new AppError("Game not found");
		}
		if (winner_id != team_away_id && winner_id != team_home_id) {
			throw new AppError("You must select one of teams of the game");
		}
		game.team_away_id = team_away_id;
		game.team_home_id = team_home_id;
		game.winner_id = winner_id;
		game.date = date;
		game.week = week;

		gamesRepository.save(game);
		return game;
	}
	private async findTeam(teamName: string): Promise<string> {
		const teamRepository = getCustomRepository(TeamRepository);
		const team = await teamRepository.findByName(teamName);

		if (!team) {
			throw new AppError(`Team '${teamName}' not found`);
		}

		return team.id;
	}
}
