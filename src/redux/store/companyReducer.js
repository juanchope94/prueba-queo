import {
    REGISTER_COMPANY_REQUEST,
    REGISTER_COMPANY_SUCCESS,
    REGISTER_COMPANY_FAILED,
    LIST_COMPANY_SUCCESS,
    CLOSE_MODAL
} from '../const/companyConst'



export const companyState = {
    loading: false,
    companys: [],
    messages: [],
    openModal: false

}


export default function companyReducer(state = companyState, action = {}) {
    switch (action.type) {
        case REGISTER_COMPANY_REQUEST:
            return {
                ...state,
                loading: true

            }

        case REGISTER_COMPANY_SUCCESS:
            return {
                ...state,
                loading: false,
                openModal: true,
                messages: action.messages

            }
        case REGISTER_COMPANY_FAILED:
            return {
                ...state,
                loading: false,
                openModal: true,
                messages: action.messages

            }
        case LIST_COMPANY_SUCCESS:
            return {
                ...state,
                companys: action.companys
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