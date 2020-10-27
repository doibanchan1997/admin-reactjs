import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {hiddenForm} from './../../actions/form';
const FormAddProduct = () =>{
  
  const dispatch = useDispatch();
  const {showForm, titleForm, contentForm}= useSelector(state=>state.form);
 const handleClose = ()=> {
  dispatch(hiddenForm())
 }
 useEffect(()=>{
  if(showForm){
    document.body.style.overflow = "hidden"
  }else {
    document.body.style.overflow = "auto"
  }
},[showForm])
    return (
      <div className={`wraper ${(showForm===false)?"close-wraper-form": "open-wraper-form"}`}>
      <div className="row">
        <div className="col-12 col-m-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              {
                titleForm
              }
              <i onClick={handleClose} className="fas fa-times"/>
            </div>
              {contentForm}
          </div>
        </div>
      </div>
    </div>
    )
}
export default FormAddProduct;