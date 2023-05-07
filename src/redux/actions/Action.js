import { ActionType,InstallAction,InstallResult } from "../constants/actionType";

export const  Req = (userName,password, port , frhUser, frhAddr, frhPort, frhDir, frhPassword ) => {
    return {
        type: ActionType.REQ,
        userName,
        password,
        port,
        frhUser,
        frhAddr,
        frhPort,
        frhDir,
        frhPassword
    };
};

export const Res = (result, userName, password,port , frhUser, frhAddr, frhPort, frhDir, frhPassword, Rescode, os) => {
    return {
        type: ActionType.RES,
        result,
        userName,
        password,
        port,
        frhUser,
        frhAddr,
        frhPort,
        frhDir,
        frhPassword,
        Rescode,
        os

    };
};

export const IsReq = (userName,password,port , frhUser, frhAddr, frhPort, frhDir, frhPassword, startFlag,os) =>{
    return {
        type: InstallAction.ISREQ,
        userName,
        password,
        port,
        frhUser,
        frhAddr,
        frhPort,
        frhDir,
        frhPassword,
        startFlag,
        os
    };
}

export const IsRes = (Rescode2) =>{
    return {
        type:InstallAction.ISRES,
        Rescode2,
    };
}

export const InstallReq = (result2) =>{
    return {
        type:InstallResult.ISRESULTREQ,
        result2,
    }
};
export const InstallRes = (result2) =>{
    return {
        type:InstallResult.ISRESULTRES,
        result2,    
    }
};