'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <form className='mt-16 bg-white rounded-2xl md:w-[400px] w-full shadow-lg flex flex-col'>
      <div className='p-7 rounded-t-md bg-white shadow-lg w-full gap-3 flex flex-col text-black'>
        <label htmlFor='domicilio' className='font-bold px-1'>
          Domicilio
        </label>
        <div className='flex items-center justify-start flex-col relative bg-slate-300 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
          <input
            className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
            type='text'
          />
        </div>
        <label htmlFor='localidad' className='font-bold px-1'>
          Localidad
        </label>
        <div className='flex items-center justify-start flex-col relative bg-slate-300 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
          <input
            className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
            type='text'
          />
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
