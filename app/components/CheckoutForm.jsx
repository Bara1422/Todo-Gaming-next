'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import CardSummary from './CardSummary'

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    reset()
    console.log(data)
  }

  return (
    <form
      className='mt-16 bg-white rounded-2xl md:w-[400px] w-full min-w-[300px] sm:min-w-[400px] shadow-lg flex flex-col'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=' p-7 rounded-md bg-white shadow-lg w-full gap-3 flex flex-col text-black'>
        <label htmlFor='domicilio' className='font-bold px-1'>
          Domicilio
        </label>
        <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
          <input
            className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
            {...register('domicilio', { required: true })}
          />
        </div>
        {errors.domicilio && (
          <span className='text-red-600 font-semibold pl-1'>
            Este campo es requerido
          </span>
        )}

        <label htmlFor='localidad' className='font-bold px-1'>
          Localidad
        </label>
        <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
          <input
            className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
            {...register('localidad', { required: true })}
          />
        </div>
        {errors.localidad && (
          <span className='text-red-600 font-semibold pl-1'>
            Este campo es requerido
          </span>
        )}

        <CardSummary />

        <input
          type='submit'
          value='Pagar'
          className='m-0 text-white h-auto rounded-lg border-none p-2 w-full bg-red-600 cursor-pointer'
        />
      </div>
    </form>
  )
}

export default CheckoutForm
