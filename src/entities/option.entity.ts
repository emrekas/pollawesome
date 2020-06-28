import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne} from "typeorm";
import { Poll } from "./poll.entity";
import IAudit from "./audit.interface";

@Entity()
export class Option extends BaseEntity implements IAudit {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  content: string;

  @Column()
  voteCount: number;

  @Column()
  votedByUserId: string;

  @Column()
  createdBy: string;

  @Column()
  modifiedBy: string;

  @Column()
  creationDate: Date;
  
  @Column()
  updateDate: Date;

  @Column()
  pollId: string;

  @ManyToOne(type => Poll, poll => poll.options, { eager: false })
  poll: Poll;
  
}