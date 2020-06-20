import createSagaMiddleware from 'redux-saga';
import productReducer from './store/productReducer';
import sagas from './sagas/index';
import {createStore, applyMiddleware} from 'redux';

const sagaMiddleware= createSagaMiddleware();
export default function configureStore(){
    const store = createStore(productReducer , applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(sagas);
    store.injectedReducers ={};
    store.injectedSagas={};

    return store;
}