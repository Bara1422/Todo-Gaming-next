import React from 'react'

const Contact = () => {
  return (
    <section
      id='contact'
      className='sm:p-8 py-8 px-2 flex justify-center bg-contact-image bg-no-repeat bg-cover bg-center lg:bg-left'
    >
      <form className='flex flex-col bg-[#111] w-full md:w-4/6 lg:w-3/6 lg:max-w-lg justify-center border-2 border-white rounded-2xl p-8'>
        <h2 className='text-center pb-4 text-2xl'>Contáctanos</h2>
        <input
          type='text'
          placeholder='Nombre'
          className='mb-2 p-2 rounded-md bg-[#111] border-2 border-white'
        />
        <input
          type='text'
          placeholder='Email'
          className='mb-2 p-2 rounded-md bg-[#111] border-2 border-white'
        />
        <textarea
          cols='20'
          rows='5'
          placeholder='Escribe tu mensaje...'
          className='mb-2 rounded-md p-2 bg-[#111] border-2 border-white'
        />
        <button className='border-2 border-white w-1/3 mx-auto rounded-md p-1 text-lg hover:text-amethyst-600 '>
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact
