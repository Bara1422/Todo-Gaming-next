import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='flex-1 flex justify-around max-w-screen-xl md:pt-[4.5rem] pt-7 landscape:pt-2 z-10'>
      {children}
    </div>
  )
}

export default Wrapper
