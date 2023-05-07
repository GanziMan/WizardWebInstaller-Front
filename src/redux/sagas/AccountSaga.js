import axios from "axios";
import {all, call, fork, put, select, takeLatest} from 'redux-saga/effects';
import { ActionType, InstallAction, InstallResult } from "../constants/actionType";
import qs from 'qs'
import { InstallRes, Res, IsRes } from "../actions/Action";
import { decrypt } from "../../aes256";

const axiosConfig = {
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
}

function postReq(data){
    const reuslt = axios.post("http://localhost:8070/api/hostCheck",qs.stringify(data),axiosConfig).then((response) => {
        console.log(response.status);
        console.log(response.data);
        return response;
    }).catch((e)=> {
        return e;
    })
    return reuslt;
}

function installReq(data){
    const result = axios.post('http://localhost:8070/api/defalutInstall',qs.stringify(data),axiosConfig).then((response) => {
        console.log(response.status);
        console.log(response.data);
        return response
    }).catch((e)=> {
        return e; 
    })
    return result;
}

function installresultReq(data){
    const result = data;
    console.log(data);
    return result;
}


function* SPostReq(){
    try{
        const data = yield select((state) => {
            return state.AccountReducer;
        });
        const result = yield call(postReq,data); 
        if(result.data.resCode === '0000'){
            yield put(Res(false,data.userName,decrypt(data.password), data.port, data.frhUser, data.frhAddr, data.frhPort,data.frhDir,decrypt(data.frhPassword),"로그인 성공",result.data.data)); 
        }
        else if(result.data.resCode==="E003"){
            yield put(Res(true,data.userName,decrypt(data.password), data.port, data.frhUser, data.frhAddr, data.frhPort,data.frhDir,decrypt(data.frhPassword),"더존 FRH 서버에 접근 불가",result.data.data));   
        }
        else if(result.data.resCode === "E001"){
            yield put(Res(true,data.userName,decrypt(data.password), data.port, data.frhUser, data.frhAddr, data.frhPort,data.frhDir,decrypt(data.frhPassword),"사용자 계정과 비밀번호를 확인해주세요.",result.data.data));   
        }
        else if(result.data.resCode === "E002"){  
            console.log(result.data);
            yield put(Res(true,data.userName,decrypt(data.password), data.port, data.frhUser, data.frhAddr, data.frhPort,data.frhDir,decrypt(data.frhPassword),"포트번호를 확인해주세요.",result.data.data));   
        }
    }catch(e){
        console.log(e);
    }
}
function* SinstallReq(){
    try{
        const data = yield select((state) => {
            return state.AccountReducer;
        });
        const result = yield call(installReq,data); 
        yield put(IsRes(result.data.resCode));
    }catch(e){
        console.log(e);
    }
}

function* SinstallresultReq(){
    try{
        const data = yield select((state) => {
            return state.AccountReducer;
        });
            yield put(InstallRes(data.userName,data.password, data.port, data.frhUser, data.frhAddr, data.frhPort,data.frhDir,data.frhPassword,data.startFlag));
        
    }catch(e){
        console.log(e);
    }
}

function* watchAlert(){
    yield takeLatest(ActionType.REQ,SPostReq);
    yield takeLatest(InstallAction.ISREQ,SinstallReq);
    yield takeLatest(InstallResult.ISRESULTREQ,SinstallresultReq);
}
export default function* AccountSaga(){
    yield all([fork(watchAlert)]);
}
