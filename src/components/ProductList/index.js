import React from 'react';
import ProductItem from '../ProductItem';
const ProductList = (props)=>{
    return(
        <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Quantity</th>
                    <th>#</th>
                  </tr>
                </thead>
                <tbody>
                  {props.children}
                </tbody>
              </table>
    )
}
export default ProductList;