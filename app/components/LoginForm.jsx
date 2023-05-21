'use client'

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FormStyled from './FormStyled'
import CustomButton from './CustomButton'
import Link from 'next/link'
import { useAuth } from '@/app/context/AuthContext'
import { Toaster, toast } from 'react-hot-toast'
import { Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { emailValidation, passwordValidation } from '../utils/utils'

const LoginForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = useForm()

  const { login, loading, currentUser, error } = useAuth()
  const router = useRouter()

  const onSubmit = (data) => {
    login(data.email, data.password)
    reset()
  }

  useEffect(() => {
    if (currentUser) {
      router.push('/')
    }
  }, [currentUser, router])

  useEffect(() => {
    if (error) {
      toast.error(error[0]?.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontWeight: '700'
        }
      })
    }
  }, [error])

  return (
    <>
      {error && <Toaster position='bottom-center' />}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <div className=' pt-7 px-7 pb-2 rounded-md bg-white shadow-lg w-full gap-3 flex flex-col text-black'>
          <label htmlFor='emailLogin' className='font-bold px-1'>
            Email:
          </label>
          <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
            <input
              className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
              type='email'
              id='emailLogin'
              {...register('email', emailValidation)}
            />
          </div>
          {errors.email && (
            <span className='text-red-600 font-semibold pl-1'>
              {errors.email.message}
            </span>
          )}

          <label htmlFor='passwordLogin' className='font-bold px-1'>
            Password:
          </label>
          <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
            <input
              className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
              type='password'
              id='passwordLogin'
              {...register('password', passwordValidation)}
            />
          </div>
          {errors.password && (
            <span className='text-red-600 font-semibold pl-1'>
              {errors.password.message}
            </span>
          )}
          <div className='flex items-center justify-center p-2'>
            <CustomButton>
              {loading ? <Spinner size='sm' /> : 'Ingresar'}
            </CustomButton>
          </div>

          <div className='flex items-center justify-center p-2 gap-2'>
            <span>
              <p>¿Todavia no tienes cuenta?</p>
            </span>
            <Link href='/signin'>
              <button
                className='text-red-600 ml-1 cursor-pointer hover:underline'
                aria-label='Registrarte'
              >
                <p>Registrarte</p>
              </button>
            </Link>
          </div>
        </div>
      </FormStyled>
    </>
  )
}

export default LoginForm
