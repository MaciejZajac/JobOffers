import { call, put, getContext, select } from "redux-saga/effects";
import {
  NEWOFFER_SUCCEDED,
  NEWOFFER_FAILED
} from "../constants/offerConstants";
import { newOffer } from "../api/offer";
import { SToken } from "../selectors";

export function* newOfferHandler({ payload }) {
  try {
    let token = yield select(SToken);
    const history = yield getContext("history");
    const response = yield call(newOffer, { payload, token });
    yield put({ type: NEWOFFER_SUCCEDED, response });
    // history.push("/dashboard");
  } catch (err) {
    yield put({ type: NEWOFFER_FAILED, message: err });
  }
}
