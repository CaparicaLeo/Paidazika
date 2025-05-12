import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	Timestamp,
	UpdateDateColumn,
} from "typeorm";

enum permission {
	COMUM = 'comum',
	ADMIN = 'admin',
}
@Entity("users")
export default class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;
	@Column()
	name: string;
	@Column()
	email: string;
	@Column()
	type: permission;
    @Column()
    password:string;
	@Column()
	ranking_position: number;
	@Column()
	avatar: string;
	@Column()
	term_guess: Date;
	@CreateDateColumn()
	created_at: Date;
	@UpdateDateColumn()
	update_at: Date;
}
