'use client'

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import FormStyled from './FormStyled'
import CustomButton from './CustomButton'
import Link from 'next/link'
import { useAuth } from '@/app/context/AuthContext'
import { Spinner } from '@chakra-ui/react'
import { Toaster, toast } from 'react-hot-toast'

import { VALIDATE_EMAIL } from '../utils/utils'
import { useRouter } from 'next/navigation'

const SigninForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm()
  const router = useRouter()

  const { signin, loading, error, currentUser } = useAuth()

  if (currentUser) {
    router.push('/')
  }

  const onSubmit = async (data) => {
    try {
      await signin(data.nombre, data.email, data.password)
      reset()
    } catch (error) {
      toast.error(error.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontWeight: '700'
        }
      })
    }
  }

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
        <div className='flex flex-col w-full gap-3 pb-2 text-black bg-white rounded-md shadow-lg pt-7 px-7'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='nombreSignin' className='px-1 font-bold'>
              Nombre:
            </label>
            <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
              <input
                id='nombreSignin'
                className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
                {...register('nombre', {
                  required: 'Este campo es requerido'
                })}
              />
            </div>
            {errors.nombre && (
              <span className='pl-1 font-semibold text-red-600'>
                Este campo es requerido
              </span>
            )}

            <label htmlFor='emailSignin' className='px-1 font-bold'>
              Email:
            </label>
            <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
              <input
                id='emailSignin'
                className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
                type='email'
                {...register('email', {
                  required: 'Este campo es requerido',
                  pattern: {
                    value: VALIDATE_EMAIL,
                    message: 'Email inválido'
                  }
                })}
              />
            </div>
            {errors.email && (
              <span className='pl-1 font-semibold text-red-600'>
                {errors.email.message}
              </span>
            )}

            <label htmlFor='passwordSignin' className='px-1 font-bold'>
              Contraseña:
            </label>
            <div className='flex items-center justify-start flex-col relative bg-gray-100 rounded-2xl text-[#7d7d7d] px-1 shadow-lg focus:bg-white focus:outline-0'>
              <input
                className='w-full border-none caret-[#ff441f] p-4 rounded-t-2xl bg-transparent h-6 block text-[#7d7d7d] focus:outline-none focus:border-black'
                type='password'
                id='passwordSignin'
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 5,
                    message: 'Mínimo 5 caracteres'
                  }
                })}
              />
            </div>
            {errors.password && (
              <span className='pl-1 font-semibold text-red-600'>
                {errors.password.message}
              </span>
            )}
            <div className='flex items-center justify-center p-2'>
              <CustomButton disabled={loading}>
                {loading ? <Spinner size='sm' /> : 'Registrate'}
              </CustomButton>
            </div>

            <div className='flex items-center justify-center gap-2 p-2'>
              <span>
                <p>Ya tienes cuenta?</p>
              </span>
              <Link href='/login'>
                <button
                  className='ml-1 text-red-600 cursor-pointer hover:underline'
                  aria-label='Ingresar'
                >
                  <p>Ingresar</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FormStyled>
    </>
  )
}

export default SigninForm
