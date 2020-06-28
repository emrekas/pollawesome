import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Poll } from "./poll.entity";
import IAudit from "./audit.interface";

@Entity()
@Unique(['username'])
export class User extends BaseEntity implements IAudit {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  createdBy: string;

  @Column()
  modifiedBy: string;

  @Column()
  creationDate: Date;
  
  @Column()
  updateDate: Date;

  @OneToMany(type => Poll, poll => poll.user, { eager: true })
  polls: Poll[];  

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}