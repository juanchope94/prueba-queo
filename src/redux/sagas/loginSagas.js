import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST } from '../const/loginConst'
import { productSuccess } from '../actions/loginAction'

const baseUrl = 'https://prueba_tecnica_queo.test/api/v1/'

function* loginSaga(payload) {
    console.log('Login saga')
  
    const headerParams = {
        'Content-Type': 'application/json'
    };

    const data = yield axios.post(baseUrl + 'auth/login', { email: payload.email, password: payload.password }, {headerParams})
        .then(response => response)
        .catch(err => err.response)
    
    //yield put(productSuccess(data.data.data))

}

export default function* loginRootSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}