import {put , takeLatest} from 'redux-saga/effects';
import axios from 'axios';


function* companySaga(){
    console.log('Login saga')
    const data = yield axios.get('https://primalmkt.com/api/v1/elemento/listar')
    .then(response => response)
    .catch (err=> err.response)
    console.log(data)
   yield put(productSuccess(data.data.data))

}

export default function* companyRootSaga(){
   yield takeLatest(PRODUCT_REQUEST,companySaga)
}