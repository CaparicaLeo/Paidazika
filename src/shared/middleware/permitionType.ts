import UsersRepository from "@modules/users/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";


export default async function permitionType(request:Request, response:Response, next:NextFunction){
    const {id} = request.user
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(id);
    if(!user){
        throw new AppError("User not find");
    }
    if(user.type != 'admin'){
        throw new AppError("Acess denied: Admin only");
    }

    return next();
}