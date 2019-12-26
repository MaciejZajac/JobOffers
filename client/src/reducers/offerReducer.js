import {
  GET_PRIVATE_OFFERS_REQUEST,
  GET_PRIVATE_OFFERS_SUCCEDED,
  GET_PRIVATE_OFFERS_FAILED,
  GET_OFFERS_REQUEST,
  GET_OFFERS_SUCCEDED,
  GET_OFFERS_FAILED,
  POST_NEWOFFER_REQUEST,
  POST_NEWOFFER_FAILED,
  POST_NEWOFFER_SUCCEDED,
  POST_COMPANY_PROFILE_REQUEST,
  POST_COMPANY_PROFILE_SUCCEDED,
  POST_COMPANY_PROFILE_FAILED
} from "../constants/offerConstants";

const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_NEWOFFER_REQUEST:
      return { ...state, isLoading: true };
    case POST_NEWOFFER_SUCCEDED:
      return { ...state, isLoading: false };
    case POST_NEWOFFER_FAILED:
      return { ...state, isLoading: false };
    case GET_PRIVATE_OFFERS_REQUEST:
      return { ...state, isLoading: true };

    case POST_COMPANY_PROFILE_REQUEST:
      return { ...state, isLoading: true };

    case POST_COMPANY_PROFILE_SUCCEDED:
      return { ...state, isLoading: false };

    case POST_COMPANY_PROFILE_FAILED:
      return { ...state, isLoading: false };

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
