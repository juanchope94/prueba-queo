import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';



//Global Reducers
import loginReducer from './loginReducer';




export default function createReducer(injectedReducers={}){
    const rootReducer = combineReducers({        
        loginReducer,
         ...injectedReducers
    })
  return mergeWithRouterState(rootReducer);
}