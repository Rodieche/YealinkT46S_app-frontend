import { Manager, Socket } from 'socket.io-client';
import { useTelephoneStore } from '../stores';
import { isMyPhone } from '../helpers';

interface IPayload {
    ip: string;
    callerNumber?: string;
    callerId?: string;
}

export const connectToServer = (): Socket => {
	console.log('Socket called')
    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');
    const socket = manager.socket('/');

    const setIncomeCall = useTelephoneStore.getState().setIncomeCall;
    const setOutgoingCall = useTelephoneStore.getState().setOutgoingCall;
    const terminateCall = useTelephoneStore.getState().terminateCall;
    const establishedCall = useTelephoneStore.getState().establishedCall;

    socket.on('incomingCall', (payload: IPayload)=> {
        if(isMyPhone(payload.ip)){
            setIncomeCall(payload.callerNumber!, payload.callerId);
        }
    });

    socket.on('outgoingCall', (payload)=>{
        if(isMyPhone(payload.ip)){
            setOutgoingCall(payload.callerNumber!, payload.callerId);
        }
    });

    socket.on('terminateCall', (payload) => {
        console.log('Terminated Call')
        if(isMyPhone(payload.ip)){
            terminateCall();
        }
    });

    socket.on('establishedCall', (payload) => {
        console.log('Established Call')
        if(isMyPhone(payload.ip)){
            establishedCall();
        }
    });

    return socket;
};
