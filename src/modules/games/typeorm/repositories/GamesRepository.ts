import { Entity, EntityRepository, Repository } from "typeorm";
import Game from "../entities/Game";

@EntityRepository(Game)
export default class GamesRepository extends Repository<Game> {}
