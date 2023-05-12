import React from 'react'

const LiCard = ({ children }) => {
  return (
    <li className='flex items-center justify-between text-[#9faab7]'>
      {children}
    </li>
  )
}

const CardSummary = () => {
  return (
    <div className='w-full max-w-2xl'>
      <div className='p-[32px_7px_7px_7px]'>
        <ul className='p-0 list-none flex flex-col gap-2'>
          <LiCard>
            <p>Costo de productos</p>
            <span>10000</span>
          </LiCard>
          <LiCard>
            <p>Costo de envío</p>
            <span>10000</span>
          </LiCard>
        </ul>
      </div>
      <hr className='h-[1px] w-full bg-slate-600' />
      <div className='flex justify-between items-center py-2 px-1 '>
        <h4 className='text-xl font-semibold'>Total</h4>
        <span className='text-xl font-semibold'>10000</span>
      </div>
    </div>
  )
}

export default CardSummary
