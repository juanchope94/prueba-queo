import createSagaMiddleware from 'redux-saga';
import loginReducer from './store/loginReducer';
import sagas from './sagas/index';
import { createStore, applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const composeEnhancers = process.env.NODE_ENV !== 'production'
        && typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        })
        : compose;

    const store = createStore(loginReducer,  composeEnhancers(...enhancers));


    sagaMiddleware.run(sagas);
    store.injectedReducers = {};
    store.injectedSagas = {};

    return store;
}