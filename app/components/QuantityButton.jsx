import React from 'react'

const QuantityButton = ({ fn, item, label, children }) => {
  return (
    <button
      className='w-6 text-red-600 text-2xl text-center cursor-pointer leading-5 mb-1 hover:bg-[#ffe3e3]'
      onClick={() => fn(item)}
      aria-label={label}
    >
      {children}
    </button>
  )
}

export default QuantityButton
