import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne} from "typeorm";
import { Poll } from "./poll.entity";
import IAudit from "./audit.interface";

@Entity()
export class Option extends BaseEntity implements IAudit {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  content: string;

  @Column({nullable:true})
  voteCount: number;

  @Column()
  createdBy: string;

  @Column({nullable: true})
  modifiedBy?: string;

  @Column()
  creationDate: Date;
  
  @Column({nullable: true})
  updateDate?: Date;

  @Column()
  pollId: string;

  @ManyToOne(type => Poll, poll => poll.options, { eager: false })
  poll: Poll;
  
}