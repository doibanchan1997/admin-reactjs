import *as formTypes from '../constants/form';
export const showForm = () =>({
    type: formTypes.SHOW_FORM
});
export const hiddenForm = () =>({
    type: formTypes.HIDDEN_FORM
}); 
export const changeTitleForm =(titleForm)=>({
    type: formTypes.CHANGE_TITLE_FORM,
    payload:{
        titleForm
    }
}); 
export const changeContentForm = (contentForm)=>({
    type: formTypes.CHANGE_CONTENT_FORM,
    payload: {
        contentForm
    }
})