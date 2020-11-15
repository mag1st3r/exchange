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
  CLEAR_CONFIRM_DATA,
} from "../constants";

const initialState = {
  loading: null,
  error: null,
  payMethods: null,
  calculateResult: null,
  detailsExchange: null,
  confirmed: null,
};

export default function exchange(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PAY_METHODS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PAY_METHODS_SUCCESS:
      return {
        ...state,
        loading: false,
        payMethods: payload,
      };
    case GET_PAY_METHODS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CALCULATE_PAY_METHODS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CALCULATE_PAY_METHODS_SUCCESS:
      return {
        ...state,
        loading: false,
        calculateResult: payload,
      };
    case CALCULATE_PAY_METHODS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SAVE_DETAILS_EXCHANGE:
      return {
        ...state,
        detailsExchange: payload,
      };
    case CLEAR_DATA_EXCHANGE:
      return {
        ...state,
        detailsExchange: null,
        calculateResult: null,
      };
    case CONFIRM_EXCHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONFIRM_EXCHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmed: payload,
        detailsExchange: null,
        calculateResult: null,
      };
    case CONFIRM_EXCHANGE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_CONFIRM_DATA:
      return {
        ...state,
        confirmed: null,
      };
    default:
      return state;
  }
}
