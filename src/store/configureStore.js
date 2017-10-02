import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import requestFactory from './requestFactory';

export default function configureStore (initialState) {

    const finalCreateStore = compose(
        applyMiddleware(promise, thunk, requestFactory),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if(module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept('../reducers',
        () => store.replaceReducer(rootReducer)
        );
    }

    return store;
}
