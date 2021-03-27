const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});

//  constants
const PORT = 3001

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

//  начинаем работать с сокетом
io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected.')
    })
});

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});