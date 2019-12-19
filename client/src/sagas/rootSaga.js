import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST } from "../constants/authConstants";
import { registerHandler } from "./authSagas";

function* sagas() {
  yield takeLatest(REGISTER_REQUEST, registerHandler);
}

export default sagas;
