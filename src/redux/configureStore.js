import createSagaMiddleware from 'redux-saga';
import loginReducer from './store/loginReducer';
import sagas from './sagas/index';
import {createStore, applyMiddleware} from 'redux';

const sagaMiddleware= createSagaMiddleware();
export default function configureStore(){
    const store = createStore(loginReducer , applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(sagas);
    store.injectedReducers ={};
    store.injectedSagas={};

    return store;
}