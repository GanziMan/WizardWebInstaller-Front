import { LogType } from '../constants/actionType';

export const SwpLogReq = () => {
  return {
    type: LogType.LOG_REQ
  };
};
export const SwpLogRes = (logs) => {
    return {
      type: LogType.LOG_RES,
      logs
    };
  };
