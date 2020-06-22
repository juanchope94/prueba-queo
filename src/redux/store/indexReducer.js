import { combineReducers } from 'redux';



//Global Reducers
import loginReducer from './loginReducer';
import companyReducer from './companyReducer';




export default function createReducer(injectedReducers={}){
    const rootReducer = combineReducers({        
        loginReducer,
        companyReducer,
         ...injectedReducers
    })
  return rootReducer;
}