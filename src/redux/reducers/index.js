import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import exchange from "./exchange";


export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    exchange: exchange
  });
