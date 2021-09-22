import * as actionTypes from "./actionTypes";

export function getMovieListSuccess(movies) {
  return { type: actionTypes.GET_MOVIE_LIST_SUCCESS, payload: movies };
}

export const getMovies = () => {
  return function (dispatch) {
    let url = "http://localhost:3000/movies";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getMovieListSuccess(result)));
  };
};
