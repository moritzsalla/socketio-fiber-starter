const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4001;
const index = require('./index');

const app = express();
app.use(index);
app.use(express.static(path.join(__dirname, 'client/build')));

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
  socket.emit('event', io.engine.clientsCount);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
