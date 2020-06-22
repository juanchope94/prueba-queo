import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { REGISTER_COMPANY_REQUEST, LIST_COMPANY_REQUEST , DELETE_COMPANY_REQUEST} from '../const/companyConst'
import { registerCompanySuccess,registerCompanyFailed, listCompanySuccess, listCompanyRequest, deleteCompanySuccess } from '../actions/companyAction'

const baseUrl = 'https://appprueba.venoudev.com/api/v1/company'


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
         yield put(registerCompanySuccess(data.data.messages))
         break;
      case 400:
         console.log(data);
         yield put(registerCompanyFailed(data.data.errors))
         break;
      default:
         break;
   }
}


function* listCompanySaga() {
   const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      Accept: 'application/json'
   };
   const data = yield axios.get(baseUrl + '/list', { headers })
      .then(response => response)
      .catch(err => err.response)
   switch (data.status) {
      case 200:
         console.log(data)
         yield put(listCompanySuccess(data.data.data[0].companies_paginated))
         break;
      case 401:
         break;
      default:
         break;
   }


}

function* deleteCompanySaga(payload) {
   const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      Accept: 'application/json'
   };
   const data = yield axios.delete(baseUrl + '/delete/'+payload.id, { headers })
      .then(response => response)
      .catch(err => err.response)
      console.log(data)
   switch (data.status) {
      case 200:
         console.log(data)
         yield put(listCompanyRequest())
         yield put(deleteCompanySuccess(data.data.messages))
         break;
      case 401:
         break;
      default:
         break;
   }


}

export default function* loginRootSaga() {
   yield takeLatest(REGISTER_COMPANY_REQUEST, registerCompanySaga),
   yield takeLatest(LIST_COMPANY_REQUEST, listCompanySaga),
   yield takeLatest(DELETE_COMPANY_REQUEST, deleteCompanySaga)


}