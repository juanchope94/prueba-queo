import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS, CLOSE_MODAL } from '../const/loginConst'



export const loginState = {
    token: "",
    rol: [],
    isAutenticated: false,
    loading: false,
    messages: [],
    openModal: false
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
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                messages: action.messages,
                openModal: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: '',
                rol: [],
                isAutenticated: false,


            }
        case CLOSE_MODAL:
            return {
                ...state,
                openModal: false


            }

        default:
            return state;
    }

}