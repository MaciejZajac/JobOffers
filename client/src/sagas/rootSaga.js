import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST, LOGIN_REQUEST } from "../constants/authConstants";
import {
  GET_PRIVATE_OFFERS_REQUEST,
  GET_OFFERS_REQUEST,
  POST_NEWOFFER_REQUEST,
  POST_COMPANY_PROFILE_REQUEST
} from "../constants/offerConstants";
import { registerHandler, loginHandler } from "./authSagas";
import {
  newOfferHandler,
  getPrivateOffersHandler,
  getOffersHandler,
  profileHandler
} from "./offerSagas";

function* sagas() {
  yield takeLatest(REGISTER_REQUEST, registerHandler);
  yield takeLatest(LOGIN_REQUEST, loginHandler);
  yield takeLatest(POST_COMPANY_PROFILE_REQUEST, profileHandler);
  yield takeLatest(POST_NEWOFFER_REQUEST, newOfferHandler);
  yield takeLatest(GET_OFFERS_REQUEST, getOffersHandler);
  yield takeLatest(GET_PRIVATE_OFFERS_REQUEST, getPrivateOffersHandler);
}

export default sagas;
