import * as types from '../const/companyConst';

export const registerCompanyRequest = (values) => (
    {
        type: types.REGISTER_COMPANY_REQUEST,
        values
    }
);
export const registerCompanySuccess = () => (
    {
        type: types.REGISTER_COMPANY_SUCCESS,
       
    }
);

