import { showSidebar } from '../actions/ui';
import *as uiTypes from './../constants/ui';
const initialState = {
    showSidebar : false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case uiTypes.SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: true,
            }
        case uiTypes.HIDDEN_SIDEBAE:
            return {
                ...state,
                showSidebar: false,
            }
        default:
            return state
    }
}
export default reducer