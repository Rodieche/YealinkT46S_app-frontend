import { useTelephoneStore } from "../stores"
import { MdOutlinePhoneCallback } from "react-icons/md";

export const AlertComponent = () => {

    const callerId = useTelephoneStore(state => state.callerId);
    const callerNumber = useTelephoneStore(state => state.callerNumber);

    return (
        <div className="bg-yellow-500 text-black-900 rounded-md p-4 mr-20 ml-20 mt-10">
            <div className="flex items-center space-x-3">
                <MdOutlinePhoneCallback className="h-6 w-6" />
                <div>
                <h3 className="text-lg font-medium">{`${callerId? callerId + ' - ': null}${callerNumber}`} </h3>
                <p className="text-sm">Incoming Call</p>
                </div>
            </div>
        </div>
      )
    }
    
// function CircleCheckIcon(props) {
//     return (
//         <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         >
//         <circle cx="12" cy="12" r="10" />
//         <path d="m9 12 2 2 4-4" />
//         </svg>
//     )
// }
