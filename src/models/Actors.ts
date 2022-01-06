import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "actors"})
export class Actors extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    @Column() title: string;
    @Column() firstname: string;
    @Column() lastname: string;
    @Column() age: number;
    @Column() info: string;
};







