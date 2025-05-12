import { NextFunction, Request, Response } from "express";
import CreateGameService from "../services/CreateGameService";

export default class GameController {
    //Not tested on Insomnia
    //Maybe i gonna rerun the migration game 
	public async create(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
        try {
            const {team_away_name,team_home_name, date, week} = request.body
            const createGame = new CreateGameService;
            const game = await createGame.execute({team_away_name,team_home_name, date, week});
            return response.json(game);
        } catch (error) {
            next(error);
        }
    }
}
