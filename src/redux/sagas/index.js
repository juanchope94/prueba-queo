import {all} from 'redux-saga/effects';
import ProductSaga from './productSagas';

export default function* rootSaga(){
    yield all([
        ProductSaga()
    ]);
}