import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";

enum permission {
	COMUM = "comum",
	ADMIN = "admin",
}
interface IRequest {
	name: string;
	email: string;
	password: string;
	type: permission;
}

export default class CreateUserService {
	public async execute({
		name,
		email,
		password,
		type,
	}: IRequest): Promise<User | void> {
		const usersRepository = getCustomRepository(UsersRepository);
		const emailExist = await usersRepository.findByEmail(email);
		if (emailExist) {
			throw new AppError("Email address already use");
		}
		if (type != permission.COMUM && type != permission.ADMIN) {
			throw new AppError("Yoy must selected 'comun' or 'admin' type");
		}
		const hashedPassword = await hash(password, 8);

		const user = usersRepository.create({
			name,
			email,
			password: hashedPassword,
			type,
			points:0,
			ranking_position: 0,

		});
		await usersRepository.save(user);
		return user;
	}
}
