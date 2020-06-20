import {PRODUCT_SUCCESS} from '../const/productConst'

export const productState ={
    productos:[]
}


export default function productReducer(state=productState , action={}){
        switch(action.type)
        {
                 case PRODUCT_SUCCESS:
                     return{
                         ...state,
                         productos:action.productos
                     }
                     
                 default : 
                 return state;
        }

}