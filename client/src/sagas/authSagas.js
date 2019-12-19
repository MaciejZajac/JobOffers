import { call, put, getContext } from "redux-saga/effects";
import { REGISTER_FAILED, REGISTER_SUCCEDED } from "../constants/authConstants";
import { register } from "../api/register";

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
