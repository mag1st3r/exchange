import { all, fork } from "redux-saga/effects";
import exchangeSagas from "./exchange";

const sagas = [exchangeSagas];

export function* rootSaga(services = {}) {
  yield all(sagas.map((saga) => fork(saga, services)));
}
