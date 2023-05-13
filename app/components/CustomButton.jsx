import React from 'react'

const CustomButton = ({ children, m, w, disabled, onClick }) => {
  return (
    <button
      className={`m-${m || 2} w-${
        w || 48
      }  text-white h-auto rounded-lg  p-2  bg-red-600 text-center hover:opacity-70 active:opacity-100 disabled:opacity-40`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
