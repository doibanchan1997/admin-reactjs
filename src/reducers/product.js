import *as productConstants from './../constants/product.js';
const productInitialState = {
    listProduct: [],
    productEditing: null
}
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case productConstants.FETCH_PRODUCT:
            return {
                ...state,
                listProduct: [],
            }
        case productConstants.FETCH_PRODUCT_SUCCESS:
            const {data} = action.payload;
            return {
                ...state,
                listProduct: data
            }
        case productConstants.FETCH_PRODUCT_ERROR:
            return {
                ...state,
                listProduct: []
            }
        case productConstants.ADD_PRODUCT:
            return {
                ...state
            }
        case productConstants.ADD_PRODUCT_SUCCESS:{
             const {data} = action.payload;
            return {
                ...state,
                listProduct: [data].concat(state.listProduct)
            }
        }
        case productConstants.ADD_PRODUCT_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
            }
        }
        case productConstants.UPDATE_PRODUCT: {
            return {
                ...state,
            }
        }
        case productConstants.UPDATE_PRODUCT_SUCCESS: {
            const {data} =action.payload;
            const {listProduct} = state;
            const index = listProduct.findIndex(item => item.id ===data.id)
            if(index!== -1){
                const newList = [
                    ...listProduct.slice(0, index),data,
                    ...listProduct.slice(index+1)
                ];
                return{
                    ...state,
                    listProduct: newList
                }
            }
            return {
                ...state,
            }
        }
        case productConstants.UPDATE_PRODUCT_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                listProduct:state.listProduct
            }
        }
        case productConstants.SET_PRODUCT_EDITING: {
            const {product} = action.payload;
            return { 
                ...state,
                productEditing: product,
            }
        }
           
        default:
            return state
    }
}
export default productReducer;