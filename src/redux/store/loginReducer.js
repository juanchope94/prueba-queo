import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../const/loginConst'

export const loginState = {
    productos: []
}


export default function loginReducer(state = loginState, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
              
            }

        default:
            return state;
    }

}