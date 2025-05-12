import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('games')
export default class Game{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    date:Date
    @Column('uuid')
    team_away_id:string
    @Column('uuid')
    team_home_id:string
    @Column('uuid')
    winner_id:string
    @Column()
    week:number
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_at:Date
}