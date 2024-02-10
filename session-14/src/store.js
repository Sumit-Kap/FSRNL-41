import { applyMiddleware, createStore } from "redux";
import rootReducer from "./combineReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const composeEnhancer = composeWithDevTools({});
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
