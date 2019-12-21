import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST, LOGIN_REQUEST } from "../constants/authConstants";
import { registerHandler, loginHandler } from "./authSagas";

function* sagas() {
  yield takeLatest(REGISTER_REQUEST, registerHandler);
  yield takeLatest(LOGIN_REQUEST, loginHandler);
}

export default sagas;
