import teamsRouter from "@modules/teams/routes/teams.routes";
import { Router } from "express";

const routes = Router();

routes.use('/teams', teamsRouter);

export default routes;
