import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import movies from "./movies";


export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    movies: movies
  });
