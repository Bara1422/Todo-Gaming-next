import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='flex-1 flex justify-around max-w-screen-xl md:pt-36 pt-14 z-10'>
      {children}
    </div>
  )
}

export default Wrapper
