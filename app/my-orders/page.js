import React from 'react'
import MyOrders from '../components/MyOrders'

const Orders = () => {
  return (
    <div
      className='px-5 flex items-start justify-center bg-center bg-cover bg-no-repeat bg-fixed m-auto min-h-screen h-full'
      style={{ backgroundImage: 'url(/ordersBg.jpg)' }}
    >
      <div className='flex-1 flex justify-around max-w-screen-xl p-36'>
        <MyOrders />
      </div>
    </div>
  )
}

export default Orders
