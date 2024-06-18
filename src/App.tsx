import { useState } from 'react';
import { dialUp } from './services/telephone.service';
import { CiHeadphones } from "react-icons/ci";
import { MdOutlinePhonePaused, MdCancel } from "react-icons/md";
import { CiMicrophoneOff } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const App = () => {
  const [number, setNumber] = useState('');

  const dialer = (key: string) => {
    switch(key) {
      case 'BACK_IDLE':
      case 'X':
        setNumber('');
        break;
      case 'HEADSET':
      case 'HOLD':
      case 'MUTE':
        // Do nothing for these keys
        break;
      case 'OK':
        setNumber(prev => `Calling ${prev}...`);
        break;
      default:
        setNumber(prevNumber => prevNumber + key);
    }
    dialUp(key); // Assuming dialUp is defined elsewhere in your code
  }

  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full bg-white rounded-lg shadow-md p-4">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full text-2xl font-medium text-gray-900 focus:outline-none"
            value={number}
            onChange={(e) => dialer(e.target.value[e.target.value.length - 1])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          {[...'123456789*0#'].map(key => (
            <button 
              key={key} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-4 rounded-lg text-2xl" 
              onClick={() => dialer(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="flex w-full space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('OK')}>
            <FaPhoneAlt />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('X')}>
            <MdCancel />
          </button>
        </div>
        <div className="flex w-full space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('HEADSET')}>
            <CiHeadphones />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('HOLD')}>
            <MdOutlinePhonePaused />
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('MUTE')}>
            <CiMicrophoneOff />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
