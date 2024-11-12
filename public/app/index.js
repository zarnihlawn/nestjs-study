import { io } from 'https://cdn.socket.io/4.8.0/socket.io.esm.min.js';

const bedRequestButton = document.getElementById('bed-request-button');
const bedNoInput = document.getElementById('bed-no');

const wardRequestButton = document.getElementById('ward-request-button');
const wardNoInput = document.getElementById('ward-no');

const socket = io('http://localhost:3000/wards', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log(socket.id);

  socket.on(`bed-no-accepted-${socket.id}`, (bedNo) => {
    console.log(`Your bed no is accepted. Bed No. ${bedNo}`);
    alert(`Your bed no is accepted. Bed No. ${bedNo}`);
  });

  socket.on(`ward-no-accepted-${socket.id}`, (wardNo) => {
    console.log(`Your ward no is accepted. Ward No. ${wardNo}`);
    alert(`Your ward no is accepted. Ward No. ${wardNo}`);
  });
});

bedRequestButton.onclick = () => {
  if (socket.connected) {
    const bedNo = bedNoInput.value;
    socket.emit('request-bed', bedNo);
  } else {
    alert('Socket is not connected');
  }
};

wardRequestButton.onclick = () => {
  if (socket.connected) {
    const wardNo = wardNoInput.value;
    socket.emit('request-ward', wardNo);
  } else {
    alert('Socket is not connected');
  }
};
