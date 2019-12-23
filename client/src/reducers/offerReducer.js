import {
  GET_PRIVATE_OFFERS_REQUEST,
  GET_PRIVATE_OFFERS_SUCCEDED,
  GET_PRIVATE_OFFERS_FAILED,
  GET_OFFERS_REQUEST,
  GET_OFFERS_SUCCEDED,
  GET_OFFERS_FAILED
} from "../constants/offerConstants";

const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRIVATE_OFFERS_REQUEST:
      return state;

    case GET_PRIVATE_OFFERS_SUCCEDED:
      return {
        ...state,
        totalCount: action.response.offer.totalCount,
        privateOffers: action.response.offer.offers
      };

    case GET_PRIVATE_OFFERS_FAILED:
      return state;

    case GET_OFFERS_REQUEST:
      return state;
    case GET_OFFERS_SUCCEDED:
      return {
        ...state,
        totalCount: action.response.offer.totalCount,
        offers: action.response.offer.offers
      };
    case GET_OFFERS_FAILED:
      return state;
    default:
      return state;
  }
};

export default offerReducer;
