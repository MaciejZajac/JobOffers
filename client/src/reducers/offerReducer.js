import {
  GET_PRIVATE_OFFERS_REQUEST,
  GET_PRIVATE_OFFERS_SUCCEDED,
  GET_PRIVATE_OFFERS_FAILED,
  GET_OFFERS_REQUEST,
  GET_OFFERS_SUCCEDED,
  GET_OFFERS_FAILED,
  NEWOFFER_REQUEST,
  NEWOFFER_SUCCEDED,
  NEWOFFER_FAILED
} from "../constants/offerConstants";

const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWOFFER_REQUEST:
      return { ...state, isLoading: true };
    case NEWOFFER_SUCCEDED:
      return { ...state, isLoading: false };
    case NEWOFFER_FAILED:
      return { ...state, isLoading: false };
    case GET_PRIVATE_OFFERS_REQUEST:
      return { ...state, isLoading: true };

    case GET_PRIVATE_OFFERS_SUCCEDED:
      return {
        ...state,
        totalCount: action.response.offer.totalCount,
        privateOffers: action.response.offer.offers,
        isLoading: false
      };

    case GET_PRIVATE_OFFERS_FAILED:
      return { ...state, isLoading: false };

    case GET_OFFERS_REQUEST:
      return { ...state, isLoading: true };
    case GET_OFFERS_SUCCEDED:
      return {
        ...state,
        totalCount: action.response.offer.totalCount,
        offers: action.response.offer.offers,
        isLoading: false
      };
    case GET_OFFERS_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default offerReducer;
