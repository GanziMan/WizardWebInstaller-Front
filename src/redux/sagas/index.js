import { all,call } from "redux-saga/effects";
import AccountSaga from "./AccountSaga";
import log from "./LogSaga";
export default function* rootSaga() {
    yield all(
        [
            call(AccountSaga),
            call(log)
        ]
        )
}