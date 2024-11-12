import { io } from 'https://cdn.socket.io/4.8.0/socket.io.esm.min.js';

const checkConnectionButton = document.getElementById('check-connection');

const adminSocket = io('http://localhost:3000/wards-admin', {
  transports: ['websocket'],
  query: { token: '123' },
});

adminSocket.on('connect', () => {
  console.log(adminSocket.id);
});

adminSocket.on('disconnect', () => {
  console.log('Scoket is disconnected');
});

adminSocket.on('incoming-bed-request', ({ clientId, bedNo }) => {
  const ask = confirm(
    `Do you want to accept ${bedNo} requested by ${clientId}`,
  );

  if (ask) {
    adminSocket.emit('accept-bed-no', { clientId, bedNo });
  }
});

adminSocket.on('incoming-ward-request', ({ clientId, wardNo }) => {
  const ask = confirm(
    `Do you want to accept ${wardNo} requested by ${clientId}`,
  );

  if (ask) {
    adminSocket.emit('accept-ward-no', { clientId, wardNo });
  }
});

checkConnectionButton.onclick = () => {
  console.log('Socket is connected or not: ', adminSocket.connected);
};
