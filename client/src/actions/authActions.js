import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SESSION,
  LOGOUT_REQUEST
} from "../constants/authConstants";

export const ARegister = user => ({
  type: REGISTER_REQUEST,
  payload: user
});

export const ALogin = user => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const ALogout = () => ({
  type: LOGOUT_REQUEST
});

export const ALoginSession = user => ({
  type: LOGIN_SESSION,
  payload: user
});
