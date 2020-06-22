import { REGISTER_COMPANY_REQUEST,REGISTER_COMPANY_SUCCESS} from '../const/companyConst'



export const companyState = {

}


export default function companyReducer(state = companyState, action = {}) {
    switch (action.type) {
        case REGISTER_COMPANY_REQUEST:
            return {
                ...state,
             
            }

        case REGISTER_COMPANY_SUCCESS:
            return {
                ...state,
           

            }
     

        default:
            return state;
    }

}