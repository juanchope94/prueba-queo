import {all} from 'redux-saga/effects';
import loginSaga from './loginSagas';
import companySaga from './companySagas';



export default function* rootSaga(){
    yield all([
        loginSaga(),
        companySaga()
      //  companySaga(),
       // employeeSaga(),
    ]);
}