import * as types from '../const/loginConst';

export const loginRequest = (email, password) => (
    {
        type: types.LOGIN_REQUEST,
        email,
        password
    }
);
export const loginSuccess = (token, roles) => (
    {
        type: types.LOGIN_SUCCESS,
        token,
        roles
    }
);

export const logoutRequest = () => (
    {
        type: types.LOGOUT_REQUEST,

    }
);
export const logoutSuccess = () => (
    {
        type: types.LOGOUT_SUCCESS,

    }
);