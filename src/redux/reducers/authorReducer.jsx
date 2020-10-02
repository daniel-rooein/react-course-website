import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authorRducer = (state = initialState.authors, action) => {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.courses;
        default:
            return state;
    }
};

export default authorRducer;