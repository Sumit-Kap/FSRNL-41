import { createStore } from "redux";
import rootReducer from "./combineReducers";

const store = createStore(rootReducer);

export default store;
