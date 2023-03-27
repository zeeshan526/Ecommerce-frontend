import React from 'react'
import '../cart/cart.css'
// import { useDispatch,useSelector } from 'react-redux'

function Cart() {


    // const cartItems = useSelector((state) => state.cart.cartItems);


  return (
    <div className='car-page'>
        <div className='cart-wrapper'>
            <div>
            {/* <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>

                    </tr>
                    <tr>
                    <td>image Sanford Table Top Water Dispenser 550 Watts SF1404WD</td>
                    <td>Total</td>
                    <td>Price</td>
                    <td>Remove</td>

                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Cart