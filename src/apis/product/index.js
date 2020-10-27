import axiosService from './../../commons/axiosService';
import{API_ENDPOINT} from './../../constants'
const endpoint='products';

export const getListProduct = () => {
    return axiosService.get(`${API_ENDPOINT}/${endpoint}`);
}

export const addProduct = (data)=>{
    return axiosService.post(`${API_ENDPOINT}/${endpoint}`, data);
}

export const updateProduct = (data, productId)=>{
    return axiosService.put(`${API_ENDPOINT}/${endpoint}/${productId}`, data);
}