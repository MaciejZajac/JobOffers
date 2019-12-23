import { call, put, getContext, select } from "redux-saga/effects";
import {
  NEWOFFER_SUCCEDED,
  NEWOFFER_FAILED,
  GET_PRIVATE_OFFERS_SUCCEDED,
  GET_PRIVATE_OFFERS_FAILED,
  GET_OFFERS_SUCCEDED,
  GET_OFFERS_FAILED
} from "../constants/offerConstants";
import { newOffer, getPrivateOffers, getOffers } from "../api/offer";
import { SToken } from "../selectors";

export function* newOfferHandler({ payload }) {
  try {
    let token = yield select(SToken);
    const history = yield getContext("history");
    const response = yield call(newOffer, { payload, token });
    yield put({ type: NEWOFFER_SUCCEDED, response });
    history.push("/dashboard");
  } catch (err) {
    yield put({ type: NEWOFFER_FAILED, message: err });
  }
}

// PUBLIC
export function* getOffersHandler() {
  try {
    const response = yield call(getOffers);
    yield put({ type: GET_OFFERS_SUCCEDED, response });
  } catch (err) {
    yield put({ type: GET_OFFERS_FAILED, message: err });
  }
}

// PRIVATE
export function* getPrivateOffersHandler() {
  try {
    let token = yield select(SToken);
    const response = yield call(getPrivateOffers, { token });
    yield put({ type: GET_PRIVATE_OFFERS_SUCCEDED, response });
  } catch (err) {
    yield put({ type: GET_PRIVATE_OFFERS_FAILED, message: err });
  }
}
