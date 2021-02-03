import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { discussionReducer } from "./Discussion/reducer";
import hostReducer from "./Hosts/reducer"

const reducers = combineReducers({
    discussions : discussionReducer,
    hosts : hostReducer
});

const customMiddleware = (store) => (next) => (action) => {
  typeof action === "function" ? action(store.dispatch) : next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(customMiddleware));

export const store = createStore(reducers, enhancer);
