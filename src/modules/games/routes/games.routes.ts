import { Router } from "express";
import GameController from "../controllers/GameController";
import { celebrate, Segments } from "celebrate";
import Joi from "joi";
import isAuthenticated from "@shared/middleware/isAuthenticated";
import permitionType from "@shared/middleware/permitionType";

const gamesRouter = Router();
const gamesController = new GameController();

gamesRouter.get("/", isAuthenticated, async (req, res, next) => {
	try {
		await gamesController.index(req, res, next);
	} catch (error) {
		next(error);
	}
});
gamesRouter.get(
	"/:id",
	celebrate({
		[Segments.PARAMS]: { id: Joi.string().uuid().required() },
	}),
	isAuthenticated,
	async (req, res, next) => {
		try {
			await gamesController.show(req, res, next);
		} catch (error) {
			next(error);
		}
	}
);
gamesRouter.post(
	"/",
	celebrate({
		[Segments.BODY]: {
			team_away_name: Joi.string().required(),
			team_home_name: Joi.string().required(),
			date: Joi.date().required(),
			week: Joi.number().required(),
		},
	}),
	isAuthenticated,
	permitionType,
	async (req, res, next) => {
		try {
			await gamesController.create(req, res, next);
		} catch (error) {
			next(error);
		}
	}
);
gamesRouter.put(
	"/:id",
	celebrate({
		[Segments.BODY]: {
			team_away_name: Joi.string().required(),
			team_home_name: Joi.string().required(),
			winner_name:Joi.string().required(),
			isTie: Joi.boolean(),
			date: Joi.date().required(),
			week: Joi.number().required(),
		},
		[Segments.PARAMS]: {
			id: Joi.string().required(),
		},
	}),
	isAuthenticated,
	permitionType,
	async (req, res, next) => {
		try {
			await gamesController.update(req, res, next);
		} catch (error) {
			next(error);
		}
	}
);
gamesRouter.delete(
	"/:id",
	celebrate({
		[Segments.PARAMS]: { id: Joi.string().uuid().required() },
	}),
	isAuthenticated,
	permitionType,
	async (req, res, next) => {
		try {
			await gamesController.delete(req, res, next);
		} catch (error) {
			next(error);
		}
	}
);

export default gamesRouter;
