import {
  POST_NEWOFFER_REQUEST,
  GET_PRIVATE_OFFERS_REQUEST,
  GET_OFFERS_REQUEST,
  POST_COMPANY_PROFILE_REQUEST
} from "../constants/offerConstants";

export const ANewOffer = offer => ({
  type: POST_NEWOFFER_REQUEST,
  payload: offer
});

export const ACompanyProfile = profile => ({
  type: POST_COMPANY_PROFILE_REQUEST,
  payload: profile
});

//public

export const AGetOffers = () => ({
  type: GET_OFFERS_REQUEST
});

// private

export const AGetPrivateOffers = () => ({
  type: GET_PRIVATE_OFFERS_REQUEST
});
