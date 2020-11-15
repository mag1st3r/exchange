import { fork, put, takeEvery, select } from "redux-saga/effects";

import {
  GET_PAY_METHODS_REQUEST,
  CALCULATE_PAY_METHODS_REQUEST,
  CONFIRM_EXCHANGE_REQUEST
} from "../constants";

import {
  GetPayMethodsSuccess,
  GetPayMethodsError,
  CalculatePayMethodsSuccess,
  CalculatePayMethodsError,
  ConfirmExchangeSuccess,
  ConfirmExchangeError
} from "../actions/exchange";

import { getPayMethods, calculate, confirmExchange } from "../../api/api";

function* watchGetPayMethods() {
  yield takeEvery(GET_PAY_METHODS_REQUEST, handleGetPayMethods);
}

function* watchCalculate() {
  yield takeEvery(CALCULATE_PAY_METHODS_REQUEST, handleCalculate);
}

function* watchConfirm() {
  yield takeEvery(CONFIRM_EXCHANGE_REQUEST, handleConfirm);
}

function* handleGetPayMethods() {
  try {
    const responseData = yield getPayMethods();
    yield put(GetPayMethodsSuccess(responseData));
  } catch (error) {
    console.error(error.message, "from get pay methods");
    yield put(GetPayMethodsError(error.message));
  }
}

function* handleCalculate({ payload }) {
  try {
    const responseData = yield calculate(payload);
    yield put(CalculatePayMethodsSuccess(responseData.amount));
  } catch (error) {
    console.error(error.message, "from calculate");
    yield put(CalculatePayMethodsError(error.message));
  }
}

function* handleConfirm({payload}) {
  try {
    const responseData = yield confirmExchange(payload);
    yield put(ConfirmExchangeSuccess(responseData.message));
  } catch (error) {
    console.error(error.message, "from get confirm");
    yield put(ConfirmExchangeError(error.message));
  }
}

export default function* exchangeSagas() {
  yield fork(watchGetPayMethods);
  yield fork(watchCalculate);
  yield fork(watchConfirm);
}
