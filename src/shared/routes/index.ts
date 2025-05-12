import gamesRouter from "@modules/games/routes/games.routes";
import teamsRouter from "@modules/teams/routes/teams.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import usersRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();

routes.use('/teams', teamsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/games', gamesRouter);

export default routes;
