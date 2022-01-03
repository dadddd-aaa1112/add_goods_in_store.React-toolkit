import React from "react";

const Cart2 = (props) => {

    return (
        <tr key={props.goodsObj[props.dataCart]['articul']}>
            <td> {props.goodsObj[props.dataCart]['title']} </td>
            <td>{props.goodsObj[props.dataCart]['cost']}</td>
            <td>{props.cart[props.dataCart]}</td>
            <td>{props.cart[props.dataCart] * props.goodsObj[props.dataCart]['cost']}</td>
            <td>
                <button className='deduct' data-key={props.dataCart}>-</button>
                <button className='add' data-key={props.dataCart}>+</button>
                <button className='delete' data-key={props.dataCart}>del</button>
            </td>
        </tr>

    )
}
export default Cart2;

