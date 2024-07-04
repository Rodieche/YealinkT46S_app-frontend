import { useTelephoneStore } from "../stores";

const telephone_ip = useTelephoneStore.getState().telephoneUrl;

export const isMyPhone = (ip: string): boolean => {
    if(ip != telephone_ip){
        return false;
    }
    return true;
}