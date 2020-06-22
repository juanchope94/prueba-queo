import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGOUT_SUCCESS} from '../const/loginConst'



export const loginState = {
    token: "",
    rol: [],
    isAutenticated: false,
    loading: false
}


export default function loginReducer(state = loginState, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                rol: action.roles,
                isAutenticated: true,
                loading: false

            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: '',
                rol: [],               
                isAutenticated: false,
              

            }

        default:
            return state;
    }

}