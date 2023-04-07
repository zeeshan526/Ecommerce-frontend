import React from 'react'
import thankuYou from '../../images/thank-you1.png'

function Thanku() {
  return (
    <div className='thankuPage'>
    <div><img src={thankuYou} alt=''/></div>
          <h1>Thank you for your purchase!</h1>
      <p>Your order has been confirmed and will be shipped soon.</p>
    </div>
  )
}

export default Thanku