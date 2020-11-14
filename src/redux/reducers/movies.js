import {
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_ERROR,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  UPLOAD_MOVIE_REQUEST,
  UPLOAD_MOVIE_SUCCESS,
  UPLOAD_MOVIE_ERROR,
  GET_SINGLE_MOVIE_REQUEST,
  GET_SINGLE_MOVIE_SUCCESS,
  GET_SINGLE_MOVIE_ERROR,
} from "../constants";

const initialState = {
  loading: null,
  error: null,
  moviesList: null,
  singleMovie: null,
  movieAdded: null,
  movieUploaded: null,
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesList: payload,
      };
    case GET_ALL_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        search: payload,
        error: null,
      };
    case SEARCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        search: null,
        error: payload,
      };
    case DELETE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesList: payload,
        error: null,
      };
    case DELETE_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        movieAdded: false,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movieAdded: true,
        error: null,
      };
    case ADD_MOVIE_ERROR:
      return {
        ...state,
        movieAdded: false,
        loading: false,
        error: payload,
      };
    case UPLOAD_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        movieUploaded: false,
      };
    case UPLOAD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movieUploaded: true,
        error: null,
      };
    case UPLOAD_MOVIE_ERROR:
      return {
        ...state,
        movieUploaded: false,
        loading: false,
        error: payload,
      };
    case GET_SINGLE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleMovie: payload,
        error: null,
      };
    case GET_SINGLE_MOVIE_ERROR:
      return {
        ...state,
        singleMovie: false,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
