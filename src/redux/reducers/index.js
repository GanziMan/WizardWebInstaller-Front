import { combineReducers } from "@reduxjs/toolkit";
import AccountReducer from "./AccountReducer";
import { reducer } from "./InstallReducer";
import count from "./count"
import LogReducer  from "./LogReducer"
const rootReducer = combineReducers({
    AccountReducer,reducer,count, LogReducer
    
});

export default rootReducer;
