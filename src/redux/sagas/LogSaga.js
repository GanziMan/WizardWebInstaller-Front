import axios from 'axios';
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import { SwpLogRes } from '../actions/LogAction';
import { LogType } from '../constants/actionType';
import React from 'react';

axios.defaults.baseURL = 'http://localhost:8070';

function logReq() {
  const result = axios
    .get('/api/logs/log.log')
    .then((res) => {
      console.log('[LOG] Log 통신 성공');
      return res.data;
    })
    .catch((err) => {
      console.log('[LOG] Log 통신 에러');
      return err;
    });
  return result;
}

function* postSwpLogReq() {
  try {
    const result = yield call(logReq);    
    const logs = result;
    yield put(SwpLogRes(logs + <br />));
  } catch (e) {
    console.log(e);
  }
}

function* watchAlert() {
  yield takeLatest(LogType.LOG_REQ, postSwpLogReq);
}

export default function* logSaga() {
  yield all([fork(watchAlert)]);
}
