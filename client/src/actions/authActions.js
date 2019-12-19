import { REGISTER_REQUEST } from "../constants/authConstants";

export const ARegister = user => ({
  type: REGISTER_REQUEST,
  payload: user
});
