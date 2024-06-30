import { Manager, Socket } from 'socket.io-client';

export const connectToServer = (): Socket => {
	console.log('Socket called')
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');
    const socket = manager.socket('/');

    // socket.on('connect', () => {
    //     console.log('Connected to server');
    // });

    // socket.on('disconnect', () => {
    //     console.log('Disconnected from server');
    // });

    // // Agrega más eventos según sea necesario
    // socket.on('someEvent', (data: any) => {
    //     console.log('Received someEvent with data:', data);
    // });

    return socket;
};
