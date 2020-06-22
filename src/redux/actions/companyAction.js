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

export const listCompanyRequest = () => (
    {
        type: types.LIST_COMPANY_REQUEST,
        
    }
);
export const listCompanySuccess = (companys) => (
    {
        type: types.LIST_COMPANY_SUCCESS,
        companys
    }
);


