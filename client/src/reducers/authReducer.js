import {
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCEDED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCEDED
} from "../constants/authConstants";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      console.log("action", action);
      return state;
    case REGISTER_FAILED:
      console.log("action", action);
      return state;
    case REGISTER_SUCCEDED:
      console.log("action", action);
      return state;
    case LOGIN_REQUEST:
      console.log("action", action);
      return state;
    case LOGIN_FAILED:
      console.log("action", action);
      return state;
    case LOGIN_SUCCEDED:
      console.log("action", action);
      return state;
    default:
      return state;
  }
};

export default authReducer;
