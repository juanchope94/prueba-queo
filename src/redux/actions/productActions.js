import * as types from '../const/productConst';

export const productRequest=()=>(
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