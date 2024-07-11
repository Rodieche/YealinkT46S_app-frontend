import { create, type StateCreator } from "zustand";
import { devtools, persist, type StateStorage } from "zustand/middleware";

interface TelephoneState {
    telephoneUrl: string;
    telephoneNumber: string;
    incomingCall: boolean;
    outgoingCall: boolean;
    mute: boolean;
    headset: boolean;
    handsfree: boolean
    callerId: string | null;
    callerNumber: string | null;
    established: boolean;
    finished: boolean;

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
    terminateCall: () => void;
    establishedCall: () => void;
}

const Partialize = ['telephoneNumber', 'incomingCall', 'outgoingCall', 'mute', 'headset', 'handsfree', 'callerId', 'callerNumber'];

const storeTelephone: StateCreator<TelephoneState> = (set) => ({
    telephoneUrl: '',
    telephoneNumber: '',
    incomingCall: false,
    outgoingCall: false,
    established: false,
    mute: false,
    headset: false,
    handsfree: false,
    callerId: null,
    callerNumber: null,
    finished: false,

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
    establishedCall: () => set(() => ({ incomingCall: false, outgoingCall: false, established: true, telephoneNumber: '' })),
    terminateCall: () => {
        set({ incomingCall: false, outgoingCall: false, established: false, telephoneNumber: '', callerId: null, callerNumber: null, mute: false });
        setTimeout(() => {
            set({ finished: true });
            setTimeout(() => {
                set({ finished: false });
            }, 3000);
        }, 0);
    }

});

export const useTelephoneStore = create<TelephoneState>()(
    devtools(
        persist(
            storeTelephone,
            {
                partialize: (state) => 
                    Object.fromEntries(
                        Object.entries(state).filter(([key]) => !Partialize.includes(key)),
                    )
            }
            , { name: 'telephone-storage' }
        )
    )
)