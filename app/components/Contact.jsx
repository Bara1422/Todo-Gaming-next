'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const sendForm = (e) => {
    e.preventDefault()
    toast.success('Mensaje enviado', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
    setData({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section
      id='contact'
      className='sm:p-8 py-8 px-1 flex justify-center relative '
    >
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src='/ContactImage.jpg'
          alt='Contact Background Image'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <form className=' w-full md:w-4/6 lg:w-3/6  justify-center lg:max-w-lg z-10'>
        <fieldset className='flex flex-col bg-[#111]  justify-center border-2 border-white rounded-2xl p-8'>
          <legend className='sr-only'>Contáctanos</legend>
          <h2 className='text-center pb-4 text-2xl'>Contáctanos</h2>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            aria-label='Nombre'
            className='mb-2 p-2 rounded-md bg-[#111] border-2 border-white'
            value={data.name}
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            aria-label='Email'
            className='mb-2 p-2 rounded-md bg-[#111] border-2 border-white'
            value={data.email}
            onChange={handleChange}
          />
          <textarea
            cols='20'
            rows='5'
            name='message'
            placeholder='Escribe tu mensaje...'
            className='mb-2 rounded-md p-2 bg-[#111] border-2 border-white'
            value={data.message}
            onChange={handleChange}
          />
          <button
            className='border-2 border-white w-1/3 mx-auto rounded-md p-1 text-lg hover:text-amethyst-600'
            onClick={sendForm}
          >
            Enviar
          </button>
        </fieldset>
      </form>
      <Toaster position='bottom-center' />
    </section>
  )
}

export default Contact
