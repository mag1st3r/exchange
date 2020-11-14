
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
    GET_SINGLE_MOVIE_ERROR
  } from "../constants";
  
  export const GetAllMoviesRequest = () => ({
    type: GET_ALL_MOVIES_REQUEST
  });

  export const GetAllMoviesSuccess = (data) => ({
    type: GET_ALL_MOVIES_SUCCESS,
    payload: data
  });

  export const GetAllMoviesError = (error) => ({
    type: GET_ALL_MOVIES_ERROR,
    payload: error
  });
  
  export const SearchMovieRequest = (data) => ({
    type: SEARCH_MOVIE_REQUEST,
    payload: data
  });

  export const SearchMovieSuccess = (data) => ({
    type: SEARCH_MOVIE_SUCCESS,
    payload: data
  });

  export const SearchMovieError = (error) => ({
    type: SEARCH_MOVIE_ERROR,
    payload: error
  });

  export const DeleteMovieRequest = (data) => ({
    type: DELETE_MOVIE_REQUEST,
    payload: data
  });

  export const DeleteMovieSuccess = (data) => ({
    type: DELETE_MOVIE_SUCCESS,
    payload: data
  });

  export const DeleteMovieError = (error) => ({
    type: DELETE_MOVIE_ERROR,
    payload: error
  });

  export const AddMovieRequest = (data) => ({
    type: ADD_MOVIE_REQUEST,
    payload: data
  });

  export const AddMovieSuccess = (data) => ({
    type: ADD_MOVIE_SUCCESS,
    payload: data
  });

  export const AddMovieError = (error) => ({
    type: ADD_MOVIE_ERROR,
    payload: error
  });

  export const UploadMovieRequest = (data) => ({
    type: UPLOAD_MOVIE_REQUEST,
    payload: data
  });

  export const UploadMovieSuccess = (data) => ({
    type: UPLOAD_MOVIE_SUCCESS,
    payload: data
  });

  export const UploadMovieError = (error) => ({
    type: UPLOAD_MOVIE_ERROR,
    payload: error
  });

  export const GetSingleMovieRequest = (data) => ({
    type: GET_SINGLE_MOVIE_REQUEST,
    payload: data
  });

  export const GetSingleMovieSuccess = (data) => ({
    type: GET_SINGLE_MOVIE_SUCCESS,
    payload: data
  });

  export const GetSingleMovieError = (error) => ({
    type: GET_SINGLE_MOVIE_ERROR,
    payload: error
  });

  
  