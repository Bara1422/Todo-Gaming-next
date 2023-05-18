import React from 'react'

const CheckoutFormInput = ({ label, name, register, errors }) => {
  return (
    <>
      <label htmlFor={name} className='font-bold px-1'>
        {label}
      </label>
      <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
        <input
          className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
          {...register(name, { required: true })}
        />
      </div>
      {errors[name] && (
        <span className='text-red-600 font-semibold pl-1'>
          Este campo es requerido
        </span>
      )}
    </>
  )
}

export default CheckoutFormInput
