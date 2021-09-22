
import initialState from './initialState';
import * as actionTypes from '../action/actionTypes';

export default function movieListReducer(state=initialState.movies,action){
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}