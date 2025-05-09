import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('teams')
export default class Team{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @Column()
    avatar:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    update_at:Date;
}