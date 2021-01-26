const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.end('Merhaba Socket.IO');
});

io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('new-color', (color) => {
		socket.broadcast.emit('color', color);
	});
	socket.on('disconnect', () => console.log('a user disconnectid'));
});

let port = process.env.PORT || 3000;

http.listen(port, () => {
	console.log('listening on *:3000');
});
