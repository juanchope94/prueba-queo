import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { REGISTER_COMPANY_REQUEST } from '../const/companyConst'
import { registerCompanySuccess } from '../actions/companyAction'

const baseUrl = 'https://appprueba.venoudev.com/api/v1/company'
const getToken = () => {
   return localStorage.getItem('token');
}

function* registerCompanySaga(payload) {
   const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      Accept: 'application/json'
   };

   const data = yield axios.post(baseUrl + '/register', { name: payload.values.name, email: payload.values.email, website: payload.values.website }, { headers })
      .then(response => response)
      .catch(err => err.response)

   switch (data.status) {
      case 200:
         console.log(data);
         localStorage.setItem('token', data.data.data.access_token);
         //  yield put(loginSuccess(data.data.data.access_token, data.data.data.roles))
         break;
      case 401:
         break;
      default:
         break;
   }


}

// function* logoutSaga() {
//    const headers = {
//       Authorization: 'Bearer ' + localStorage.getItem('token'),
//       Accept: 'application/json'
//    };
//    const data = yield axios.post(baseUrl + '/logout', {}, { headers })
//       .then(response => response)
//       .catch(err => err.response)
//    switch (data.status) {
//       case 200:
//          console.log(data)
//          localStorage.removeItem('token')
//          yield put(logoutSuccess())
//          break;
//       case 401:
//          break;
//       default:
//          break;
//    }


// }

export default function* loginRootSaga() {
   yield takeLatest(REGISTER_COMPANY_REQUEST, registerCompanySaga)
}