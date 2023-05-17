import React from 'react'

const FormStyled = ({ children, onSubmit }) => {
  return (
    <form
      action=''
      className='mt-16 bg-white rounded-2xl md:w-[400px] w-full max-w-[400px]  sm:min-w-[400px] shadow-lg flex flex-col'
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default FormStyled
