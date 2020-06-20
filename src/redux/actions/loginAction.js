import * as types from '../const/loginConst';

export const login=(email,pass)=>(
    {
        type: types.PRODUCT_REQUEST
    }
);
export const productSuccess=(productos)=>(
    {
        type: types.PRODUCT_SUCCESS,
        productos
    }
);