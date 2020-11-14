import { fork, put, takeEvery, select } from "redux-saga/effects";


import {
  GET_ALL_MOVIES_REQUEST,
} from "../constants";



function* watchGetMovies() {
  yield takeEvery(GET_ALL_MOVIES_REQUEST, handleGetMovies);
}

function* handleGetMovies() {
  try {
  
  } catch (error) {
    console.error(error.message, "from get movies list");
    // yield put(GetAllMoviesError(error.message));
  }
}


export default function* moviesSagas() {
  yield fork(watchGetMovies);
  
}
