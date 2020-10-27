import React, { useState } from 'react';
import {hiddenForm} from './../../actions/form';
import {addProduct, updateProduct, setProductEditing} from './../../actions/product';
import {useDispatch, useSelector} from 'react-redux'
import Product from '../Product';
const ProductForm = () => {
  const {productEditing} = useSelector(state => state.listProducts)
  const dispatch = useDispatch();
  const handleClose = ()=> {
    dispatch(hiddenForm())
   }
 
    const handleChange = (event, key) => {
      const {name, value} = event.target
      // const value = target.type ==='checkbox'?target.checked : target.value;
      // const {name} = event.target;
      setValues({...values, [name]: value})
    }
    const handleSubmit = (event)=>{
      event.preventDefault();
      let product = {
        product_name:values.product_name,
        product_price : values.product_price,
        product_category: values.product_category,
        product_brand: values.product_brand, 
        SKU: values.product_sku,
        product_discount: values.product_discount,
        product_type: values.product_type,
        product_tax: values.product_tax,
        product_quantity: values.product_quantity,
        product_enable: values.product_enable
      }
      if(productEditing&&productEditing.id){
        dispatch(updateProduct(product))
      }else{
        dispatch(addProduct(product)) 

      }

    }
    const [values, setValues] = useState({
      product_name:'',
      product_price : 0,
      product_category:'',
      product_brand:'', 
      product_sku:'',
      product_discount:0,
      product_type:'',
      product_tax:'',
      product_quantity:'',
      product_enable:''})
    return (
      <form onSubmit={handleSubmit}>

        <div className="card-content">
                <div className="row">
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product-name">Product name</label>
                  </div>
                  <div className="col-4 col-sm-6">
                  <input type="text" value={productEditing?productEditing.product_name:""} name="product_name" onChange={handleChange}/>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product-price">Product price</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <input type="number" min={0} value={productEditing?productEditing.product_price:""} name="product_price" onChange={handleChange}/>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_category">Product category</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <select name="product_category" value={productEditing?productEditing.product_category:""}  onChange={handleChange}>
                      <option value="playBoy">playBoy</option>
                      <option value="xmen">xmen</option>
                      <option value="romando">romado</option>		
                    </select>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_brand">Product brand</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <select name="product_brand" value={productEditing?productEditing.product_brand:""} onChange={handleChange}>
                      <option value="playBoy">playBoy</option>
                      <option value="xmen">xmen</option>
                      <option value="romando">romado</option>		
                    </select>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_sku">Product SKU</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <input type="text" name="product_sku" value={(productEditing&&productEditing.id)?productEditing.SKU:""}  onChange={handleChange}/>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_discount">Product discount</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <input type="number" value={productEditing?productEditing.product_discount:""} name="product_discount" onChange={handleChange}/>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_type">Product type</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <select name="product_type" value={productEditing?productEditing.product_type:0} onChange={handleChange}>
                      <option value="playBoy">playBoy</option>
                      <option value="xmen">xmen</option>
                      <option value="romando">romado</option>		
                    </select>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_tax">Product tax</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <input type="number" value={productEditing?productEditing.product_tax:""} name="product_tax" onChange={handleChange}/>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_quantity">Product quantity</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <input type="number" value={productEditing?productEditing.product_quantity:""} name="product_quantity" onChange={handleChange}/>
                  </div>
                  <div className="col-2 col-sm-6">
                    <label htmlFor="product_enable">Product enable</label>
                  </div>
                  <div className="col-4 col-sm-6">
                    <select name="product_enable"  onChange={handleChange}>
                      <option value="true">enable</option>
                      <option value="false">unable</option>	
                    </select>
                  </div>
                </div>
                <div className="card-footer">
                    <button className="bg-success" type="submit"><i className="fas fa-save"></i> Save</button>
                    <button onClick={handleClose} type="button" className="bg-danger"><i className="fas fa-times"></i> Close</button>
                </div>
             
            </div>
            </form>
    )
}
export default ProductForm