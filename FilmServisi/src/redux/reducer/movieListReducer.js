
import initialState from './initialState';
import * as actionTypes from '../action/actionTypes';

export default function movieListReducer(state=initialState.movies,action){
    switch (action.type) {
        case actionTypes.GET_MOVIE_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}