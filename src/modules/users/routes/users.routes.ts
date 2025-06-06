import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@shared/middleware/isAuthenticated";
import permitionType from "@shared/middleware/permitionType";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get("/", isAuthenticated, permitionType, async (req, res, next) => {
	try {
		await usersController.index(req, res, next);
	} catch (err) {
		next(err);
	}
});
usersRouter.post(
	"/",
	celebrate({
		[Segments.BODY]: {
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().required(),
			type: Joi.string(),
		},
	}),
	async (req, res, next) => {
		try {
			await usersController.create(req, res, next);
		} catch (err) {
			next(err);
		}
	}
);

export default usersRouter;
