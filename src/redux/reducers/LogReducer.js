import { LogType } from '../constants/actionType';
const INIT_STATE = {};

function LogReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case LogType.LOG_REQ:
      return {};
    case LogType.LOG_RES:
      return {
        logs: action.logs
      };
    default:
      return state;
  }
}

export default LogReducer;