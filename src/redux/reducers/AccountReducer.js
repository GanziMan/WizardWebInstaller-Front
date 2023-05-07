import { ActionType,InstallAction, InstallResult } from '../constants/actionType';

const INIT_STATE = {
    result : true,
    userName:'',
    password:'',
    port:'',
    frhUser:'',
    frhAddr : '',
    frhPort : 22,
    frhDir : '',
    frhPassword : '',
    Rescode:'',
    result2:'',
    os:'',
    Rescode2: undefined,

};

function AccountReducer(state = INIT_STATE, action){
    
    switch(action.type){
        case ActionType.REQ:
            return {
                userName: action.userName,
                password: action.password,
                port: action.port,
                frhUser : action.frhUser,
                frhAddr : action.frhAddr,
                frhPort : action.frhPort,
                frhDir : action.frhDir,
                frhPassword : action.frhPassword
            };
        case ActionType.RES:
            return {
                result: action.result,
                userName: action.userName,
                password: action.password,
                port: action.port,
                frhUser : action.frhUser,
                frhAddr : action.frhAddr,
                frhPort : action.frhPort,
                frhDir : action.frhDir,
                frhPassword : action.frhPassword,
                Rescode:action.Rescode,       
                os:action.os,
            };
      
        case InstallAction.ISREQ:
            return {
                userName: action.userName,
                password: action.password,
                port: action.port,
                frhUser : action.frhUser,
                frhAddr : action.frhAddr,
                frhPort : action.frhPort,
                frhDir : action.frhDir,
                frhPassword : action.frhPassword,
                startFlag : action.startFlag,
                os:action.os,
            }
        case InstallAction.ISRES:
            return {
                Rescode2: action.Rescode2,
            }
        case InstallResult.ISRESULTREQ:
            return{
                result2:action.result2,
            }
        case InstallResult.ISRESULTRES:
            return{
                result2:action.result2,
            }
        default:
            return state;
    }
}

export default AccountReducer;