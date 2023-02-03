const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const index = require('./index');

const PORT = process.env.PORT || 4001;

const app = express();

app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('+ client connected');

  getApiAndEmit(socket);

  socket.on('disconnect', () => {
    console.log('- Client disconnected');

    getApiAndEmit(socket);
  });
});

const getApiAndEmit = (socket) => {
  console.log('emit event');

  io.emit('event', io.engine.clientsCount);
  socket.broadcast.emit('event', io.engine.clientsCount);
};

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
