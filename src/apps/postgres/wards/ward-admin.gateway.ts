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
  namespace: 'wards-admin',
  transports: ['websocket'],
})
export class WardsAdminGateway {
  wardNoAcceptedSub = new BehaviorSubject<{
    adminClient: Socket;
    clientId: string;
    wardNo: string;
  }>({
    adminClient: null,
    clientId: null,
    wardNo: null,
  });

  @WebSocketServer()
  adminServer: Socket;

  @SubscribeMessage('accept-ward-no')
  acceptWardNo(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { clientId: string; wardNo: string },
  ) {
    this.wardNoAcceptedSub.next({
      adminClient: client,
      clientId: payload.clientId,
      wardNo: payload.wardNo,
    });
  }

  sendWardRequestToAdminPortal(clientId: string, wardNo: string) {
    this.adminServer.emit('incoming-ward-request', { clientId, wardNo });
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    const token = client.handshake.query.token as string;
    console.log(token);

    if (token != '123') {
      console.log('Invalid token');
      client.disconnect(true);
      return;
    }
  }
}
