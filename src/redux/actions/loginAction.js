import * as types from '../const/loginConst';

export const loginRequest = (email, password) => (
    {
        type: types.LOGIN_REQUEST,
        email,
        password
    }
);
export const loginSuccess = (token,roles) => (
    {
        type: types.LOGIN_SUCCESS,
        token,
        roles
    }
);