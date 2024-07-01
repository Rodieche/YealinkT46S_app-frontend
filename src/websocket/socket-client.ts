import { Manager, Socket } from 'socket.io-client';

export const connectToServer = (): Socket => {
	console.log('Socket called')
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');
    const socket = manager.socket('/');

    socket.on('incomingCall', (payload)=> {
        console.log('Incoming Call');
        console.log(payload);
    });

    return socket;
};
