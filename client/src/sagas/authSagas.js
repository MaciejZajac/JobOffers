import { call, put, getContext } from "redux-saga/effects";
import {
  REGISTER_FAILED,
  REGISTER_SUCCEDED,
  LOGIN_SUCCEDED,
  LOGIN_FAILED
} from "../constants/authConstants";
import { register, login } from "../api/auth";

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
    const history = yield getContext("history");
    const response = yield call(login, payload);
    yield put({ type: LOGIN_SUCCEDED, response });
    const user = response.user.user;
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/dashboard");
  } catch (err) {
    yield put({ type: LOGIN_FAILED, message: err });
  }
}
