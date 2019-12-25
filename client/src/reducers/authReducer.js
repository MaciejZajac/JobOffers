import {
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCEDED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCEDED,
  LOGIN_SESSION,
  LOGOUT_REQUEST
} from "../constants/authConstants";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case REGISTER_FAILED:
      return { ...state, isLoading: false };
    case REGISTER_SUCCEDED:
      return { ...state, isLoading: false };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCEDED:
      return { ...state, user: action.response.user, isLoading: false };
    case LOGIN_FAILED:
      return { ...state, isLoading: false };
    case LOGIN_SESSION:
      return { ...state, user: action.payload };
    case LOGOUT_REQUEST:
      sessionStorage.removeItem("user");
      return { ...state, user: undefined };
    default:
      return state;
  }
};

export default authReducer;
