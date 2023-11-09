import Cookies from "js-cookie"
import { encryptData } from "./utils";
import { Customer, IVS } from "package-types";

export type IData = {
    data: { customer: Customer, identity: IVS };
    meta: object & IToken;
    message: string;
}


type IToken = {
    token?: string;
    secretKey?: string
}


export const success = (data: IData) => {
    if(data?.meta && data?.meta?.token) {
        Cookies.set('Authenticated', data?.meta?.token, { expires: 30 });
        Cookies.set('secret', data?.meta?.secretKey, { expires: 30 });
    }

    if (data?.data?.customer) {
        localStorage.setItem('user', encryptData(JSON.stringify(data?.data?.customer)));
    }

    if (data?.data?.identity) {
        localStorage.setItem('identity', encryptData(JSON.stringify(data?.data?.identity)));
    }

    return data;
}
