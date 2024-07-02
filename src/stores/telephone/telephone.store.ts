import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TelephoneState {
    telephoneUrl: string;
    telephoneNumber: string;
    incomingCall: boolean;
    outgoingCall: boolean;
    mute: boolean;
    headset: boolean;
    handsfree: boolean
    callerId: string;
    callerNumber: string;

    setTelephoneNumber: (newNumber: string) => void;
    clearTelephoneNumber: () => void;
    removeLastDial: () => void;
    setIncomeCall: (callNumber: string, callId?: string) => void;
    setOutgoingCall: (callNumber: string, callId?: string) => void;
    setMute: () => void;
    setUnMute: () => void;
    setHeadset: () => void;
    setHandsfree: () => void;
    setIP: (ip: string) => void;
}

export const useTelephoneStore = create<TelephoneState>()(
    devtools(
        persist(
            (set) => ({
                telephoneUrl: '',
                telephoneNumber: '',
                incomingCall: false,
                outgoingCall: false,
                mute: false,
                headset: false,
                handsfree: false,
                callerId: '',
                callerNumber: '',
            
                setTelephoneNumber: (newNumber: string) => set((state) => ({ telephoneNumber: state.telephoneNumber + newNumber })),
                clearTelephoneNumber: () => set(() => ({ telephoneNumber: '' })),
                removeLastDial : () => set((state) => ({ telephoneNumber: state.telephoneNumber.slice(0, -1) })),
                setIncomeCall: (callNumber: string, callId?: string) => set(() => ({incomingCall: true, callerNumber: callNumber, callerId: callId? callId : ''})),
                setOutgoingCall: (callNumber: string, callId?: string) => set(() => ({outgoingCall: true, callerNumber: callNumber, callerId: callId? callId : ''})),
                setIP: (ip: string) => set(() => ({telephoneUrl: ip})),
                setMute: () => set(() => ({mute: true})),
                setUnMute: () => set(() => ({mute: false})),
                setHeadset: () => set(() => ({headset: true, handsfree: false})),
                setHandsfree: () => set(() => ({handsfree: true, headset: false})),
            
            }), { name: 'telephone-storage' }
        )
    )
)