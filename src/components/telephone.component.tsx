import { dialUp } from "../services/telephone.service";

import { CiHeadphones, CiMicrophoneOff } from "react-icons/ci";
import { MdOutlinePhonePaused, MdCancel } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AlertComponent } from "./alert.component";
import { useTelephoneStore } from "../stores";

export const TelephoneComponent = () => {

  const number = useTelephoneStore(state => state.telephoneNumber);
  const setTelephoneNumber = useTelephoneStore(state => state.setTelephoneNumber);
  const clearTelephoneNumber = useTelephoneStore(state => state.clearTelephoneNumber);
  const removeLastDial = useTelephoneStore(state => state.removeLastDial);

  const dialer = (key: string) => {
    switch(key){
      case 'hash':
        setTelephoneNumber('#');
        break;
      case 'star':
        setTelephoneNumber('*');
        break;
      case 'cancelX':
        clearTelephoneNumber();
        break;
      default:
        if (!isNaN(+key)) {
          setTelephoneNumber(key);
        }
    }
    dialUp(key);
    console.log(number)
  }

  const inputDialer = (e: string) => {
    const valids = ['1','2','3','4','5','6','7','8','9','0','*','#'];
    if(e === 'Backspace') {
      removeLastDial();
      dialUp('f3');
      return;
    }
    else if(e === 'Escape'){
      clearTelephoneNumber();
      dialUp('backIdle');
    }
    if(!valids.includes(e)){
      return;
    }
    dialer(e);
  }
  
  return (
    <>
    <AlertComponent name='Income Call' message='Rudolf is calling' />
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-9">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full bg-white rounded-lg shadow-md p-4">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full text-2xl font-medium text-gray-900 focus:outline-none"
            value={number}
            onKeyDown={(e) => inputDialer(e.key)}
//            onChange={(e) => inputDialer(e.target.value[e.target.value.length - 1])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          {[...'123456789*0#'].map(key => {
            if(key == '*'){
              return (
                <button 
                  key={key} 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-4 rounded-lg text-2xl" 
                  onClick={() => dialer('star')}
                >
                  {key}
                </button>
              )
            }
            else if(key == '#'){
              return (
                <button 
                  key={key} 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-4 rounded-lg text-2xl" 
                  onClick={() => dialer('hash')}
                >
                  {key}
                </button>
              )
            }else{
              return (
                <button 
                  key={key} 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-4 rounded-lg text-2xl" 
                  onClick={() => dialer(key)}
                >
                  {key}
                </button>
              )
            }
          })}
        </div>
        <div className="flex w-full space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('ok')}>
            <FaPhoneAlt />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('cancelX')}>
            <MdCancel />
          </button>
        </div>
        <div className="flex w-full space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('headset')}>
            <CiHeadphones />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('hold')}>
            <MdOutlinePhonePaused />
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg flex-1 flex items-center justify-center" onClick={() => dialer('mute')}>
            <CiMicrophoneOff />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
