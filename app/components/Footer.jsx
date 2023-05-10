import React from 'react'
import LinkedIn from '../Icons/LinkedIn'
import GitHubIcon from '../Icons/GitHubIcon'
import Link from 'next/link'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <footer className='border-t-2 flex justify-around p-4 bg-[#111] w-full'>
      <div className='flex gap-3 pl-3  items-end'>
        <Link
          href='https://www.linkedin.com/in/juan-baranovsky/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedIn />
        </Link>
        <Link
          href='https://github.com/Bara1422'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </Link>
      </div>
      <FooterMenu />
    </footer>
  )
}

export default Footer
