import { combineReducers } from "redux";

import authReducer from "./authReducer";
import offerReducer from "./offerReducer";

export default () => combineReducers({ authReducer, offerReducer });
