const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const onlineUsers = {};

// In-memory database for users
const users = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' },
    { id: 4, username: 'user4' },
    { id: 5, username: 'user5' },
    { id: 6, username: 'user6' },
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.info(`New Socket Connection ${socket.id}`);
    const user = socket.handshake.auth;

    io.emit('userList', users);

    onlineUsers[user.id] = {
        socketId: socket.id,
    };

    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
