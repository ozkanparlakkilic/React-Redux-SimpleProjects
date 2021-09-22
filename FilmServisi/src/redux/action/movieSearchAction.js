
import * as actionTypes from "./actionTypes";

export function searchMovieSuccess(keyword) {
  return { type: actionTypes.SEARCH_MOVIE_SUCCESS, payload: keyword };
}
