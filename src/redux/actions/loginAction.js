import * as types from '../const/loginConst';

export const loginRequest = (email, password) => (
    {
        type: types.LOGIN_REQUEST,
        email,
        password
    }
);
export const loginSuccess = (productos) => (
    {
        type: types.LOGIN_SUCCESS,
        productos
    }
);