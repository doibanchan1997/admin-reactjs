import React from 'react';
const ProductItem = (props)=> {
    const {products, index, onClickEdit} = props;
    return(
        <tr>
            <td>{index}</td>
            <td>{products.product_name}</td>
            <td>{products.product_avatar}</td>
            <td>
                <span className="dot">
                <i className="bg-success" />
                {products.product_price}
                </span>
            </td>
            <td>{products.product_quantity}</td>
            <td>
                <button onClick={onClickEdit} type="button" className="edit bg-success"><i className="fas fa-edit " />&nbsp; Sửa</button>
                <button className="delete bg-danger"><i className="fas fa-trash-alt" />&nbsp; Xóa</button>
            </td>
        </tr>
    )
}
export default ProductItem