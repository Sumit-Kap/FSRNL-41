import { combineReducers } from "redux";
import bankingReducer from "./reducer";

const rootReducer = combineReducers({
  banking: bankingReducer,
});

export default rootReducer;
