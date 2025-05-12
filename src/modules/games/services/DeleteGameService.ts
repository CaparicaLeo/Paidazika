import { getCustomRepository } from "typeorm";
import GamesRepository from "../typeorm/repositories/GamesRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
	id: string;
}
export default class DeleteGameService {
	public async execute({ id }: IRequest) {
		const gamesRepository = getCustomRepository(GamesRepository);
		const game = await gamesRepository.findOne(id);
		if (!game) {
			throw new AppError("Game not found");
		}
		await gamesRepository.remove(game);
		return game;
	}
}
