const socketIO = require('socket.io');

function initSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A new user has connected');

    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('A user has disconnected');
    });
  });
}

module.exports = { initSocket };
   