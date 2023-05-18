import React from 'react'
import { convertToWebp } from '../utils/utils'
import { formatPrice } from '@/data'
import QuantityManage from './QuantityManage'
import Image from 'next/image'

const OrderCartItem = ({ item }) => {
  return (
    <div className='px-2 py-1 w-full border-b border-gray-500 flex justify-between items-center text-black'>
      <div className='px-2 py-1 grid grid-cols-[50px_100px_100px] justify-between'>
        <div className='w-11 h-11  flex items-center justify-center rounded-lg'>
          <Image
            src={convertToWebp(item.imgUrl)}
            alt={`Image of ${item.name}`}
            width={44}
            height={44}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className=''>
          <div className='text-sm'>{item.name}</div>
          <p className='text-green-600 font-semibold'>
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
        <QuantityManage item={item} />
      </div>
    </div>
  )
}

export default OrderCartItem
