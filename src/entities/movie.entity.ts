import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    name:string;

    @Column({length:100})
    description:string;

    @Column({length:100})
    releaseDate:Date;

    @Column({length:100})
    genre:string[];
}