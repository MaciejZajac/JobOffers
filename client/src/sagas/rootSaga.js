import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST, LOGIN_REQUEST } from "../constants/authConstants";
import { NEWOFFER_REQUEST } from "../constants/offerConstants";
import { registerHandler, loginHandler } from "./authSagas";
import { newOfferHandler } from "./offerSagas";

function* sagas() {
  yield takeLatest(REGISTER_REQUEST, registerHandler);
  yield takeLatest(LOGIN_REQUEST, loginHandler);

  yield takeLatest(NEWOFFER_REQUEST, newOfferHandler);
}

export default sagas;
