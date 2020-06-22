import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../const/loginConst'
import { loginSuccess,loginFailed, logoutSuccess } from '../actions/loginAction'

const baseUrl = 'https://appprueba.venoudev.com/api/v1/auth'


function* loginSaga(payload) {

    const headerParams = {
        'Content-Type': 'application/json'
    };

    const data = yield axios.post(baseUrl + '/login', { email: payload.email, password: payload.password }, { headerParams })
        .then(response => response)
        .catch(err => err.response)
    switch (data.status) {
        case 200:
            console.log(data);
            localStorage.setItem('token', data.data.data.access_token);
            yield put(loginSuccess(data.data.data.access_token, data.data.data.roles))
            break;
        case 400:
            console.log(data);
            yield put(loginFailed(data.data.messages))
            break;
        default:
            break;
    }


}

function* logoutSaga() {
    const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        Accept: 'application/json'
    };
    const data = yield axios.post(baseUrl + '/logout', {}, { headers })
        .then(response => response)
        .catch(err => err.response)
    switch (data.status) {
        case 200:
            console.log(data)
            localStorage.removeItem('token')
            yield put(logoutSuccess())
            break;
        case 401:
            break;
        default:
            break;
    }


}

export default function* loginRootSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga),
        yield takeLatest(LOGOUT_REQUEST, logoutSaga)
}