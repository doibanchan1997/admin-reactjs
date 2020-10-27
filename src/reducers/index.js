import {combineReducers} from 'redux';
import formReducer from './form';
import listProducts from './product';  
import uiReducer from './ui';
const rootReducer = combineReducers({
    form: formReducer,
    listProducts: listProducts,
    ui: uiReducer

});
export default rootReducer;