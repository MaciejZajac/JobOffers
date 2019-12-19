import { REGISTER_REQUEST } from "../constants/authConstants";

export const ARegister = user => ({
  type: REGISTER_REQUEST,
  payload: user
});

export const ARegister = user => ({
  type: LOGIN_REQUEST,
  payload: user
});
