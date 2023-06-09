import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='flex-1 flex justify-around max-w-screen-xl pt-[4.5rem] z-10'>
      {children}
    </div>
  )
}

export default Wrapper
