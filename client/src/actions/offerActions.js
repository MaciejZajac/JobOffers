import {
  NEWOFFER_REQUEST,
  GET_PRIVATE_OFFERS_REQUEST
} from "../constants/offerConstants";

export const ANewOffer = offer => ({
  type: NEWOFFER_REQUEST,
  payload: offer
});

export const AGetPrivateOffers = () => ({
  type: GET_PRIVATE_OFFERS_REQUEST
});
