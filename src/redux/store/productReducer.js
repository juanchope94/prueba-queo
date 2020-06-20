import {LOGIN_REQUEST, LOGIN_SUCCESS} from '../const/loginConst'

export const loginState ={
    productos:[]
}


export default function productReducer(state=loginState , action={}){
        switch(action.type)
        {
                 case LOGIN_REQUEST:
                     return{
                         ...state,
                         productos:action.productos
                     }
                     
                 default : 
                 return state;
        }

}