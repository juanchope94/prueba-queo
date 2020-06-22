import { REGISTER_COMPANY_REQUEST,REGISTER_COMPANY_SUCCESS} from '../const/companyConst'



export const companyState = {
    loading:false

}


export default function companyReducer(state = companyState, action = {}) {
    switch (action.type) {
        case REGISTER_COMPANY_REQUEST:
            return {
                ...state,
                loading:true
             
            }

        case REGISTER_COMPANY_SUCCESS:
            return {
                ...state,
                loading:false
           

            }
     

        default:
            return state;
    }

}