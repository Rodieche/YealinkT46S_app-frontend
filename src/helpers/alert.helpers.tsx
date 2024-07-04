import { FiPhoneCall, FiPhoneIncoming, FiPhoneMissed, FiPhoneOff, FiPhoneOutgoing } from "react-icons/fi";

export const AlertProps = [
    {
        type: 'IncomingCall',
        color: 'bg-yellow-500',
        icon: <FiPhoneIncoming className="h-6 w-6" />,
        message: 'Incoming Call',
        notification: true 
    },
    {
        type: 'OutgoingCall',
        color: 'bg-blue-500',
        icon: <FiPhoneOutgoing className="h-6 w-6" />,
        message: 'Outgoing Call',
        notification: true
    },
    {
        type: 'Established',
        color: 'bg-green-500',
        icon: <FiPhoneCall className="h-6 w-6" />,
        message: 'Established',
        notification: true
    },
    {
        type: 'Terminated',
        color: 'bg-orange-500',
        icon: <FiPhoneOff className="h-6 w-6" />,
        message: 'Call finished',
        notification: true
    },
    {
        type: 'Missed',
        color: 'bg-red-500',
        icon: <FiPhoneMissed className="h-6 w-6" />,
        message: 'Missed Call',
        notification: true
    }
]