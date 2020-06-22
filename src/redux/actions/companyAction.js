import * as types from '../const/companyConst';

export const registerCompanyRequest = (values) => (
    {
        type: types.REGISTER_COMPANY_REQUEST,
        values
    }
);
export const registerCompanyFailed = (messages) => (
    {
        type: types.REGISTER_COMPANY_FAILED,
        messages
       
    }
);
export const registerCompanySuccess = (messages) => (
    {
        type: types.REGISTER_COMPANY_SUCCESS,
        messages
       
    }
);
export const deleteCompanyRequest = (id) => (
    {
        type: types.DELETE_COMPANY_REQUEST,
        id
    }
);
export const deleteCompanySuccess = (messages) => (
    {
        type: types.DELETE_COMPANY_SUCCESS,
        messages
        
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
export const closeModal = () => (
    {
        type: types.CLOSE_MODAL,

    }
);


