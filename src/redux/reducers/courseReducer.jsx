import * as types from '../actions/actionTypes';

const courseRducer = (state = [], action) => {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, { ...action.course }];
        default:
            return state;
    }
};

export default courseRducer;