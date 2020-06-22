import { combineReducers } from 'redux';



//Global Reducers
import loginReducer from './loginReducer';




export default function createReducer(injectedReducers={}){
    const rootReducer = combineReducers({        
        loginReducer,
         ...injectedReducers
    })
  return rootReducer;
}