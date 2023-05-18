import React from 'react'
import OrderItem from './OrderItem'

const MyOrders = ({ orders }) => {
  return (
    <section className='sm:w-[70%] pb-[130px] pt-16'>
      <div className='w-full bg-[#0000003d] rounded-2xl sm:p-7 p-0 backdrop-blur-lg text-white'>
        <div className='max-w-screen-lg p-2'>
          <div className='pb-5 border-b border-[#e5edef] mb-5'>
            <h2>Mis ultimos pedidos</h2>
            <p>Haz seguimiento de tus pedidos anteriores</p>
          </div>
          <div>
            {orders?.map((order) => (
              <OrderItem order={order} key={order.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyOrders
