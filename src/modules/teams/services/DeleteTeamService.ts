import { getCustomRepository } from "typeorm";
import Team from "../typeorm/entities/Team";
import TeamRepository from "../typeorm/repository/TeamsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest{
    id:string
}
export default class DeleteTeamService{
    public async execute({id}:IRequest){
        const teamRepository = getCustomRepository(TeamRepository);
        const team = await teamRepository.findOne(id);
        if(!team){
            throw new AppError("Team not found");
        }
        await teamRepository.delete(team);
    }
}