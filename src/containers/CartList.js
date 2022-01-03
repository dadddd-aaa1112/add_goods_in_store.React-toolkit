import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {selectGoods} from '../store/goodsSlice'
import {selectCart} from '../store/cartSlice'
import {deduct,add,del} from '../store/cartSlice'
import Cart2 from '../components/Cart2'

const CartList = () => {
    const dispatch = useDispatch()
    const goods = useSelector(selectGoods)
    const cart = useSelector(selectCart)

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item
        return accum
    }, {})

    console.log("goodsObj", goodsObj)

    const cartKeys = Object.keys(cart)
    console.log('cartKeys', cartKeys)

    const clickHandler = (event) => {
        event.preventDefault()
        let t = event.target
        if (t.classList.contains('add')) {
            dispatch(add(t.getAttribute('data-key')))
        } else if (t.classList.contains('deduct')) {
            dispatch(deduct(t.getAttribute('data-key')))
        } else if (t.classList.contains('delete')) {
            dispatch(del(t.getAttribute('data-key')))
        }
    }

    const summa = cartKeys.reduce((accum, item) => {
        return accum += goodsObj[item]['cost'] * cart[item]
    }, 0)

    return (
        <div>
            <table className='table' onClick={clickHandler}>
                <tbody>
                <tr>
                    <th>Title</th>

                    <th>Cost</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {cartKeys.map(item =>
                <Cart2
                    dataCart={item}
                    goodsObj={goodsObj}
                    cart={cart}
                    key={'goods'+item}/>
                       )}
                <tr>
                    <td colSpan="6">Total price: {summa}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default CartList