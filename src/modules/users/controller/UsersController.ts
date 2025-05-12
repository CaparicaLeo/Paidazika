import { NextFunction, Request, Response } from "express";
import ListUserService from "../service/ListUserService";
import CreateUserService from "../service/CreateUserService";

export default class UsersController {
	public async index(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void> {
		try {
			const listUser = new ListUserService();
			const users = await listUser.execute();
			return response.json(users);
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
			const { name, email, password, type } = request.body;
			const createUser = new CreateUserService();
			const user = await createUser.execute({ name, email, password, type});
			return response.json(user);
		} catch (err) {
			next(err);
		}
	}
}
