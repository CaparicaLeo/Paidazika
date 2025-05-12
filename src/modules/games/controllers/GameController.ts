import { NextFunction, Request, Response } from "express";
import CreateGameService from "../services/CreateGameService";
import ListGameService from "../services/ListGameService";
import ShowGameService from "../services/ShowGameService";
import UpdateGameService from "../services/UpdateGameService";
import DeleteGameService from "../services/DeleteGameService";

export default class GameController {
	public async create(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { team_away_name, team_home_name, date, week } = request.body;
			const createGame = new CreateGameService();
			const game = await createGame.execute({
				team_away_name,
				team_home_name,
				date,
				week,
			});
			return response.json(game);
		} catch (error) {
			next(error);
		}
	}
	public async index(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const listGame = new ListGameService();
			const games = await listGame.execute();
			return response.json(games);
		} catch (error) {
			next(error);
		}
	}
	public async show(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const showGame = new ShowGameService();
			const { id } = request.params;
			const game = await showGame.execute({ id });
			return response.json(game);
		} catch (error) {
			next(error);
		}
	}
	public async update(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const updateGame = new UpdateGameService();
			const {
				team_away_name,
				team_home_name,
				date,
				winner_name,
				isTie,
				week,
			} = request.body;
			const { id } = request.params;

			const game = await updateGame.execute({
				id,
				team_away_name,
				team_home_name,
				date,
				winner_name,
				isTie,
				week,
			});
			return response.json(game);
		} catch (error) {
			next(error);
		}
	}
	public async delete(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const deleteGame = new DeleteGameService();
			const { id } = request.params;
			const game = await deleteGame.execute({ id });
			return response.json(game);
		} catch (error) {
			next(error);
		}
	}
}
