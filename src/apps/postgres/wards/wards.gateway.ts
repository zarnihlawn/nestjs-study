import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { BehaviorSubject } from 'rxjs';
import { Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'wards',
  transports: ['websocket'],
})
export class WardsGateway {
  wardRequestSub = new BehaviorSubject<{ client: Socket; wardNo: string }>({
    client: null,
    wardNo: null,
  });

  @WebSocketServer()
  clientServer: Socket;

  @SubscribeMessage('request-ward')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() wardNo: any) {
    this.wardRequestSub.next({ client, wardNo });
  }

  notifyClientWardNoAccepted(clientId: string, wardNo: string) {
    this.clientServer.emit(`ward-no-accepted-${clientId}`, wardNo);
  }
}
