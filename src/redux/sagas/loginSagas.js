import {put , takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {PRODUCT_REQUEST} from '../const/loginConst'
import {productSuccess} from '../actions/loginAction'

function* loginSaga(){
    console.log('Login saga')
    const data = yield axios.get('https://primalmkt.com/api/v1/elemento/listar')
    .then(response => response)
    .catch (err=> err.response)
    console.log(data)
    yield put(productSuccess(data.data.data))

}

export default function* productRootSaga(){
    yield takeLatest(PRODUCT_REQUEST,productSaga)
}