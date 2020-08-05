const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when the client connects
io.on('connect', (socket) => {
  console.log('New WS Connection...');

  socket.emit('message', 'welcome to ChatCord!');

  // Broadcast when a user connects
  socket.broadcast.emit();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
