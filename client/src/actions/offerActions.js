import {
  NEWOFFER_REQUEST,
  GET_PRIVATE_OFFERS_REQUEST,
  GET_OFFERS_REQUEST
} from "../constants/offerConstants";

export const ANewOffer = offer => ({
  type: NEWOFFER_REQUEST,
  payload: offer
});

//public

export const AGetOffers = () => ({
  type: GET_OFFERS_REQUEST
});

// private

export const AGetPrivateOffers = () => ({
  type: GET_PRIVATE_OFFERS_REQUEST
});
