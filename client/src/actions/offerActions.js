import { NEWOFFER_REQUEST } from "../constants/offerConstants";

export const ANewOffer = offer => ({
  type: NEWOFFER_REQUEST,
  payload: offer
});
