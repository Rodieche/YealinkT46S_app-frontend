import { useEffect } from "react";
import { AlertProps } from "../helpers";
import { useTelephoneStore } from "../stores"

interface IProps {
    type: string,
}

export const AlertComponent = ({ type }: IProps) => {

    function componentDidMount() {
        if (!("Notification" in window)) {
          console.log("This browser does not support desktop notification");
        } else {
          Notification.requestPermission();
        }
      }
    
    function showNotification(message: string | undefined, notification:boolean = false) {
        if(message && notification){
            new Notification(message, { body: `${callerId? callerId + ' - ': null}${ callerNumber }`, icon: '/logo.png' });
        }
    }

    const callerId = useTelephoneStore(state => state.callerId);
    const callerNumber = useTelephoneStore(state => state.callerNumber);
    
    const filteredAlertProps = AlertProps.filter(r => r.type === type);
    const alertProp = filteredAlertProps.length > 0 ? filteredAlertProps[0] : null;

    useEffect(() => {
        componentDidMount();
        showNotification(alertProp?.message, alertProp?.notification);
    },[]); 


    return (
        <div className={`${alertProp?.color} text-black-900 rounded-md p-4 mr-20 ml-20 mt-10`}>
            <div className="flex items-center space-x-3">
                {alertProp?.icon}
                <div>
                <h3 className="text-lg font-medium">{`${callerId? callerId + ' - ': null}${callerNumber}`} </h3>
                <p className="text-sm">{alertProp?.message}</p>
                </div>
            </div>
        </div>
      )
    }
