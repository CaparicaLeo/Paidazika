import { NextFunction, Request, Response } from "express";
import ListTeamService from "../services/ListTeamService";
import ShowTeamService from "../services/ShowTeamService";
import CreateTeamService from "../services/CreateTeamService";
import UpdateTeamService from "../services/UpdateTeamService";
import DeleteTeamService from "../services/DeleteTeamService";

export default class TeamsController {
	public async index(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const listTeams = new ListTeamService();
			const teams = await listTeams.execute();
			return response.json(teams);
		} catch (err) {
			next(err);
		}
	}

	public async show(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { id } = request.params;
			const showTeam = new ShowTeamService();
			const team = await showTeam.execute({ id });
			return response.json(team);
		} catch (err) {
			next(err);
		}
	}

	public async create(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { name } = request.body;
			const createTeam = new CreateTeamService();
			const team = await createTeam.execute({ name });
			return response.json(team);
		} catch (err) {
			next(err);
		}
	}
	public async update(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const { id } = request.params;
			const { name, avatar } = request.body;
			const updateTeam = new UpdateTeamService();
			const team =await updateTeam.execute({ id, name, avatar });
			return response.json(team);
		} catch (err) {
			next(err);
		}
	}
	public async delete(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const deleteTeam = new DeleteTeamService();
			const { id } = request.params;
			await deleteTeam.execute({ id });
			return response.json([]);
		} catch (err) {
			next(err);
		}
	}
}
