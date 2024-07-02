import { Manager, Socket } from 'socket.io-client';
import { useTelephoneStore } from '../stores';


export const connectToServer = (): Socket => {
	console.log('Socket called')
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');
    const socket = manager.socket('/');

    const setIncomeCall = useTelephoneStore.getState().setIncomeCall;
    const setOutgoingCall = useTelephoneStore.getState().setOutgoingCall;
    const terminateCall = useTelephoneStore.getState().terminateCall;
    const telephone_ip = useTelephoneStore.getState().telephoneUrl;

    socket.on('incomingCall', (payload)=> {
        if(payload.ip == telephone_ip){
            console.log(payload);
            console.log('Incoming Call');
            setIncomeCall(payload.callerNumber, payload.callerId);
        }
    });

    socket.on('outgoingCall', (payload)=>{
        console.log('Outgoing Call');
        if(payload.ip == telephone_ip){
            console.log(payload);
            setOutgoingCall(payload.callerNumber, payload.callerId);
        }
    });

    socket.on('terminateCall', (payload) => {
        if(payload.ip == telephone_ip){
            terminateCall();
        }
    } )

    return socket;
};
