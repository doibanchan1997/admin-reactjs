import *as uiConstant from './../constants/ui';
const uiInitialState = {
    showLoading: false
}
const reducerUi = (state = uiInitialState , action) => {
    switch (action.type) {
        case uiConstant.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }
        case uiConstant.HIDDEN_LOADING:
            return {
                ...state,
                showLoading: false
            }
        default:
            return state
    }
}
export default reducerUi;