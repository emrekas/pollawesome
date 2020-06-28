import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Option } from "./option.entity";
import IAudit from './audit.interface';

@Entity()
export class Poll extends BaseEntity implements IAudit {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  createdBy: string;

  @Column({nullable: true})
  modifiedBy?: string;

  @Column()
  creationDate: Date;
  
  @Column({nullable: true})
  updateDate?: Date;

  @Column('varchar')
  userId: string;

  @ManyToOne(type => User, user => user.polls, { eager: false })
  user: User;

  @OneToMany(type => Option, option => option.poll, { eager: true })
  options: Option[];
}