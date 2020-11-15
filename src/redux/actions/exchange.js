import {
  GET_PAY_METHODS_REQUEST,
  GET_PAY_METHODS_SUCCESS,
  GET_PAY_METHODS_ERROR,
  CALCULATE_PAY_METHODS_REQUEST,
  CALCULATE_PAY_METHODS_SUCCESS,
  CALCULATE_PAY_METHODS_ERROR,
  SAVE_DETAILS_EXCHANGE,
  CLEAR_DATA_EXCHANGE,
  CONFIRM_EXCHANGE_REQUEST,
  CONFIRM_EXCHANGE_SUCCESS,
  CONFIRM_EXCHANGE_ERROR,
  CLEAR_CONFIRM_DATA
} from "../constants";

export const GetPayMethodsRequest = () => ({
  type: GET_PAY_METHODS_REQUEST,
});

export const GetPayMethodsSuccess = (data) => ({
  type: GET_PAY_METHODS_SUCCESS,
  payload: data,
});

export const GetPayMethodsError = (error) => ({
  type: GET_PAY_METHODS_ERROR,
  payload: error,
});

export const CalculatePayMethodsRequest = (data) => ({
  type: CALCULATE_PAY_METHODS_REQUEST,
  payload: data,
});

export const CalculatePayMethodsSuccess = (data) => ({
  type: CALCULATE_PAY_METHODS_SUCCESS,
  payload: data,
});

export const CalculatePayMethodsError = (error) => ({
  type: CALCULATE_PAY_METHODS_ERROR,
  payload: error,
});

export const SaveDetailsExchange = (data) => ({
  type: SAVE_DETAILS_EXCHANGE,
  payload: data,
});

export const ClearDataExchange = () => ({
  type: CLEAR_DATA_EXCHANGE,
});

export const ConfirmExchangeRequest = (data) => ({
  type: CONFIRM_EXCHANGE_REQUEST,
  payload: data,
});

export const ConfirmExchangeSuccess = (data) => ({
  type: CONFIRM_EXCHANGE_SUCCESS,
  payload: data,
});

export const ConfirmExchangeError = (error) => ({
  type: CONFIRM_EXCHANGE_ERROR,
  payload: error
});

export const ClearConfirmData = () => ({
  type: CLEAR_CONFIRM_DATA,
});
