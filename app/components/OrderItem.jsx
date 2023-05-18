import { formatPrice } from '@/data'
import Link from 'next/link'
import React from 'react'

const OrderItem = ({ order }) => {
  return (
    <div
      className=' bg-white border border-[#e5edef] rounded-lg mb-7 overflow-hidden'
      key={order.id}
    >
      <div className='w-full sm:p-5 p-3 relative flex justify-between sm:gap-2 gap-1 '>
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
            <button className='m-0 w-24 sm:w-36 text-white h-auto rounded-lg border-none p-2 cursor-pointer bg-red-600 text-center hover:opacity-70 active:opacity-100'>
              Ver resumen
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
