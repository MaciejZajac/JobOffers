import { call, put, getContext } from "redux-saga/effects";
import {
  REGISTER_FAILED,
  REGISTER_SUCCEDED,
  LOGIN_SUCCEDED,
  LOGIN_FAILED
} from "../constants/authConstants";
import { register, login } from "../api/register";

export function* registerHandler({ payload }) {
  try {
    const history = yield getContext("history");
    const response = yield call(register, payload);
    yield put({ type: REGISTER_SUCCEDED, response });
    history.push("/login");
  } catch (err) {
    yield put({ type: REGISTER_FAILED, message: err });
  }
}

export function* loginHandler({ payload }) {
  try {
    console.log("payload", payload);
    const history = yield getContext("history");
    const response = yield call(login, payload);
    console.log("response", response);
    yield put({ type: LOGIN_SUCCEDED, response });
  } catch (err) {
    yield put({ type: LOGIN_FAILED, message: err });
  }
}
