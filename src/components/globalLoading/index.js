import React from 'react';
import { useSelector } from 'react-redux'

import iconLoading from './../../assets/img/loading.gif';
import './style.css';
const GlobalLoading = ()=>{
    const {showLoading} = useSelector(state => state.ui)
    return(
        <div className={`glabalLoading ${(showLoading)?"":"hiddenLoading"}`}>
            <img src={iconLoading} className="iconLoading" ></img>
        </div>
    )
}
export default GlobalLoading;