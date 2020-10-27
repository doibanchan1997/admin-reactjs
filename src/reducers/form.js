import *as formTypes from '../constants/form';
const initialState = {
    showForm : false,
    titleForm: ""
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case formTypes.SHOW_FORM:
            return {
                ...state,
                showForm: true,
            }
        case formTypes.HIDDEN_FORM:
            return {
                ...state,
                showForm: false,
            }
        case formTypes.CHANGE_TITLE_FORM:
            const {titleForm} = action.payload
            return {
                ...state,
                titleForm,

            }
        case formTypes.CHANGE_CONTENT_FORM:
            const {contentForm} = action.payload
            return {
                ...state,
                contentForm,
            }
        default:
            return state
    }
}
export default reducer