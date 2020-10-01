import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialsState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools
    return createStore(rootReducer, initialsState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
}