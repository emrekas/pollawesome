import { Logger } from '@nestjs/common';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { VoteList } from '../constants/DummyData';

@WebSocketGateway(3001)
export class VotingGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('VotingGateway');

  users = 0;

  async handleConnection() {
    // A client has connected
    this.users++;

    // Notify connected clients of current users
    this.server.emit('users', this.users);

    // this.users.push(client);
    
  }

  async handleDisconnect() {
    // A client has disconnected
    this.users--;

    // Notify connected clients of current users
    this.server.emit('users', this.users);

    // this.users.filter(user => user.id !== client.id);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  @SubscribeMessage('voting')
  handleVote(
    @MessageBody() data:{
      questionId: string,
      user: { id: string },
      answerId: string,
    }): any {
    console.log({questionId:data.questionId,user:data.user,answerId:data.answerId});
    const voteList = VoteList.filter(item => item.votingId === data.questionId);

    voteList.find(vote => vote.id === data.answerId).submitUsers.push(data.user);
    
    return voteList;
  }
}

export default class ResultList {}
