import React from 'react'
import CheckoutForm from '../components/CheckoutForm'

const Checkout = () => {
  return (
    <div
      className='px-5 flex items-start justify-center bg-center bg-cover bg-no-repeat bg-fixed m-auto min-h-screen h-full'
      style={{ backgroundImage: 'url(/checkoutBg.jpg)' }}
    >
      <div className='flex flex-1 justify-around max-w-screen-xl m-36'>
        <CheckoutForm />
      </div>
    </div>
  )
}

export default Checkout
