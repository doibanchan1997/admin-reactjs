import *as productConstants from './../constants/product';
export const  fetchListProduct = ()=>{
    return {
        type: productConstants.FETCH_PRODUCT
    }
}
export const fetchListProductSuccess = (data) =>{
    return {
        type: productConstants.FETCH_PRODUCT_SUCCESS,
        payload: {
            data,
        }
    }
}
export const fetchListProductError = (error) =>{
    return {
        type: productConstants.FETCH_PRODUCT_ERROR,
        payload: {
            error
        }
    }
}

export const addProduct = (product)=>{
    return {
        type: productConstants.ADD_PRODUCT,
        payload: {
            product
        }
    }
    
}
export const addProductSuccess = (data) => {
    return {
        type: productConstants.ADD_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}
export const addProductError = (error) => {
    return {
        type: productConstants.FETCH_PRODUCT_ERROR,
        payload: {
            error
        }
    }
} 

export const updateProduct = (product) => {
    return {
        type: productConstants.UPDATE_PRODUCT,
        payload: {
            product,
        }
    }
}
export const updateProductSuccess = (data) => {
    return {
        type: productConstants.UPDATE_PRODUCT_SUCCESS,
        payload: {
            data,
        }
    }
}
export const updateProductError = (error) => {
    return {
        type: productConstants.UPDATE_PRODUCT_ERROR,
        payload: {
            error,
        }
    }
}

export const setProductEditing  = (product) => {
    return {
        type: productConstants.SET_PRODUCT_EDITING,
        payload: {
            product
        }
    }
} 