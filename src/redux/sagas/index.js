import {all} from 'redux-saga/effects';
import ProductSaga from './loginSagas';

export default function* rootSaga(){
    yield all([
        loginSaga()
    ]);
}