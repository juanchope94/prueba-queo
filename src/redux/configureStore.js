import createSagaMiddleware from 'redux-saga';
import loginReducer from './store/loginReducer';
import sagas from './sagas/index';
import createReducer from './store/indexReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

    const persistConfig = {
        key: 'root',
        storage,
    }
    const persistedReducer = persistReducer(persistConfig, createReducer())

    const middlewares = [sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const composeEnhancers = process.env.NODE_ENV !== 'production'
        && typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        })
        : compose;



    const store = createStore(
        persistedReducer,
        composeEnhancers(...enhancers)
    );

    let persistor = persistStore(store)
    sagaMiddleware.run(sagas);
    store.injectedReducers = {};
    store.injectedSagas = {};

    return { store, persistor };
}