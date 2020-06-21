import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST } from '../const/loginConst'
import { loginSuccess } from '../actions/loginAction'

const baseUrl = 'https://queoapp.venoudev.com/api/v1/'

function* loginSaga(payload) {

    const headerParams = {
        'Content-Type': 'application/json'
    };

    const data = yield axios.post(baseUrl + 'auth/login', { email: payload.email, password: payload.password }, { headerParams })
        .then(response => response)
        .catch(err => err.response)
        console.log(data)
    switch (data.status) {
        case 200:
            console.log(data)
                yield put(loginSuccess(data.data.data.access_token,data.data.data.roles))
            break;
        case 401:
            break;
        default:
            break;
    }


}

export default function* loginRootSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga)
}