import {all} from 'redux-saga/effects';
import loginSaga from './loginSagas';


export default function* rootSaga(){
    yield all([
        loginSaga()
      //  companySaga(),
       // employeeSaga(),
    ]);
}