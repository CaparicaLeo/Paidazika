import { Router } from "express";
import TeamsController from "../controllers/TeamsController";
import { celebrate, Joi, Segments } from "celebrate";

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.get("/", async (req, res, next) => {
	try {
		await teamsController.index(req, res, next);
	} catch (err) {
		next(err);
	}
});
teamsRouter.get(
	"/:id",
	celebrate({
		[Segments.PARAMS]: { id: Joi.string().uuid().required() },
	}),
	async (req, res, next) => {
		try {
			await teamsController.show(req, res, next);
		} catch (err) {
			next(err);
		}
	}
);
teamsRouter.post(
	"/",
	celebrate({
		[Segments.BODY]: {
			name: Joi.string().required(),
		},
	}),
	async (req, res, next) => {
		try {
			await teamsController.create(req, res, next);
		} catch (err) {
			next(err);
		}
	}
);
teamsRouter.put(
	"/:id",
	celebrate({
		[Segments.PARAMS]: { id: Joi.string().uuid().required() },
		[Segments.BODY]: {
			name: Joi.string().required(),
			avatar: Joi.string().required(),
		},
	}),
	async (req, res, next) => {
		try {
			await teamsController.update(req, res, next);
		} catch (err) {
			next(err);
		}
	}
);
teamsRouter.delete(
	"/:id",
	celebrate({
		[Segments.PARAMS]: { id: Joi.string().uuid().required() },
	}),
	async (req, res, next) => {
		try {
			await teamsController.delete(req, res, next);
		} catch (err) {
			next(err);
		}
	}
);

export default teamsRouter;
