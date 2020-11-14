import { all, fork } from "redux-saga/effects";
import moviesSagas from "./movies";

const sagas = [moviesSagas];

export function* rootSaga(services = {}) {
  yield all(sagas.map((saga) => fork(saga, services)));
}
