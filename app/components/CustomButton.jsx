import React from 'react'

const CustomButton = ({ children, m = 2, w = 48, disabled, onClick }) => {
  return (
    <button
      className={`m-${m} w-${w}  text-white h-auto rounded-lg  p-2  bg-black text-center hover:opacity-70 active:opacity-100 disabled:opacity-40`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
