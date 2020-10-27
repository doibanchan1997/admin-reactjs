import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import ProductList from '../../components/ProductList';
import {changeContentForm, changeTitleForm, showForm} from './../../actions/form';
import {fetchListProduct, setProductEditing} from './../../actions/product';
import ProductForm from './../ProductForm';
const Product = () => {
  const dispatch = useDispatch();
  const {listProduct} = useSelector(state => state.listProducts)
  useEffect(()=>{
    dispatch(fetchListProduct());
  },[])
  const handleClickOpen = () =>{
    dispatch(setProductEditing(null))
    dispatch(showForm());
    dispatch(changeTitleForm("Add product"));
    dispatch(changeContentForm(<ProductForm/>))
  }
  const handleClickEditing = (product) => {
    dispatch(setProductEditing(product));
    dispatch(showForm());
    dispatch(changeTitleForm(`Edit Product ${product.id}`));
    dispatch(changeContentForm(<ProductForm/>))
  }
  const renderPoductItem = () => {
    let xhtml = null;
    if(listProduct.length > 0){
      xhtml = (listProduct.map((item, index)=>{
        return(
          <ProductItem
          key={index}
          index = {index}
          products = {item}
          onClickEdit = {()=>handleClickEditing(item)}
          />
        )
      }))
    }
    return xhtml
  } 
    return (
      <div className="wraper">
      <div className="row">
        <div className="col-12 col-m-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              header
              <i className="fas fa-ellipsis-h" />
            </div>
            <div className="card-content">
              <button onClick={handleClickOpen} className="addproduct bg-primary"><i className="fas fa-plus" />&nbsp; add product</button>
              <ProductList>
                {
                  renderPoductItem()
                }
              </ProductList>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    )
}
export default Product;