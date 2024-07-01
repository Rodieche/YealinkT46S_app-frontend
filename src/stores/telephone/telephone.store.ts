import { create } from "zustand";

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
}

export const useTelephoneStore = create<TelephoneState>()((set) => ({
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

}))