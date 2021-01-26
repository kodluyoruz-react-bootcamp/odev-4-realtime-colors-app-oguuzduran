import { io } from 'socket.io-client';

let socket;

export const initSocket = () => {
	socket = io('https://runtime-color.herokuapp.com/', {
		transports: ['websocket'],
	});

	console.log('Conntectig...');
	socket.on('color', (color) => {
		document.body.style.backgroundColor = `${color}`;
	});
	socket.on('connect', () => console.log('Connected!'));
};

export const disconnectSocket = () => {
	console.log('Disconnecting...');

	if (socket) socket.disconnect();
};

export const sendColor = (color) => {
	if (socket) socket.emit('new-color', color);
};
