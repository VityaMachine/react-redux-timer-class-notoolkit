import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import timerReducer from "./timer/timerReducer";

const store = createStore(timerReducer, composeWithDevTools());

export default store;