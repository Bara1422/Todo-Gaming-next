/* import Link from 'next/link' */
import { formatPrice } from '@/data'
import Link from 'next/link'
import React from 'react'

const MyOrders = ({ orders }) => {
  return (
    <section className='sm:w-[70%] min-h-screen w-full'>
      <div className='w-full bg-[#0000003d] rounded-2xl sm:p-7 p-0 backdrop-blur-lg text-white'>
        <div className='max-w-screen-lg p-2'>
          <div className='pb-5 border-b border-[#e5edef] mb-5'>
            <h2>Mis ultimos pedidos</h2>
            <p>Haz seguimiento de tus pedidos anteriores</p>
          </div>
          <div>
            {orders?.map((order) => (
              <div
                className=' bg-white border border-[#e5edef] rounded-lg mb-7 overflow-hidden'
                key={order.id}
              >
                <div className='w-full sm:p-7 p-4 relative flex justify-between gap-2 '>
                  <ul className='flex flex-col justify-center w-full'>
                    <li className='w-full flex align-top leading-[1.7] text-ellipsis overflow-hidden whitespace-nowrap text-[#7d7d7d]'>
                      <span className='min-w-[50px] pr-1 font-semibold inline-block text-[#332927]'>
                        Fecha:
                      </span>
                      <span className='text-sm sm:text-base text-center my-auto'>
                        {order.createdAt}
                      </span>
                    </li>
                    <li className='w-full inline-block align-top leading-[1.7] text-ellipsis overflow-hidden whitespace-nowrap text-[#7d7d7d]'>
                      <span className='min-w-[50px] pr-1 font-semibold inline-block text-[#332927]'>
                        Total:
                      </span>
                      <span className='text-sm sm:text-base text-center my-auto'>
                        {formatPrice(order.total)}
                      </span>
                    </li>
                  </ul>

                  <div className='flex items-center justify-center flex-col'>
                    <Link href={`my-orders/${order.id}/order-items`}>
                      <button className='m-0 w-28 sm:w-36 text-white h-auto rounded-lg border-none p-2 cursor-pointer bg-red-600 text-center hover:opacity-70 active:opacity-100'>
                        Ver resumen
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyOrders