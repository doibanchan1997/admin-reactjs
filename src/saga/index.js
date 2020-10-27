import{
    call,
    delay,
    fork, put, select, take, takeEvery, takeLatest
} from 'redux-saga/effects'
import *as productContants from './../constants/product.js';
import {getListProduct, addProduct, updateProduct} from './../apis/product';
import { STATUS_CODE } from '../constants';
import {fetchListProductSuccess, fetchListProductError, addProductSuccess, addProductError, updateProductSuccess, updateProductError} from './../actions/product';
import {showLoading, hiddenLoading} from './../actions/ui';
import { hiddenForm } from '../actions/form.js';
function* watchFetchListProductAction(){
    while(true){
        const action = yield take(productContants.FETCH_PRODUCT);
        yield put(showLoading())
        const resp = yield call(getListProduct);
        const {status, data} = resp
        if(status === STATUS_CODE.SUCCESS){
            yield put(fetchListProductSuccess(data));
        }else {
            yield put(fetchListProductError(data))
        }
        yield delay(500)
        yield put(hiddenLoading())
    }
}
function* addProductSaga({payload}) {
    const {product} = payload
    yield put(showLoading())
    const resp = yield call(addProduct, product)
    const {data, status} = resp;
    if(status === STATUS_CODE.CREATE){
        yield put(addProductSuccess(data))
        yield put(hiddenForm())
    }else {
        yield put(addProductError(data));
    }
    yield delay(500)
    yield put(hiddenLoading())
}
function* updateProductSaga({payload}){
    const {product} = payload
    const productEditing = yield select(state => state.listProducts.productEditing)
    yield put(showLoading())
    const resp = yield call(updateProduct, product, productEditing.id)
    const {data, status} = resp;
    if(status === STATUS_CODE.SUCCESS){
        yield put(updateProductSuccess(data))
        yield put(hiddenForm())
    }
    else {
        yield put(updateProductError(data));
        yield put(hiddenForm())

    }
    yield delay(500);
    yield put(hiddenLoading());
}
function* rootSaga(){
    yield fork(watchFetchListProductAction);
    yield takeEvery(productContants.ADD_PRODUCT, addProductSaga);
    yield takeLatest(productContants.UPDATE_PRODUCT, updateProductSaga)
}
export default rootSaga;