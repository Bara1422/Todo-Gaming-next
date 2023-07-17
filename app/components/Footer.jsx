import React from 'react'
import LinkedIn from '../Icons/LinkedIn'
import GitHubIcon from '../Icons/GitHubIcon'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <footer className='border-t-2 flex justify-between p-4 bg-[#111] w-full  absolute bottom-0'>
      <nav className='flex items-end gap-3 pl-3'>
        <a
          href='https://www.linkedin.com/in/juan-baranovsky/'
          target='_blank'
          rel='noreferrer'
          aria-label='Enlace a LinkedIn'
        >
          <LinkedIn />
        </a>
        <a
          href='https://github.com/Bara1422'
          target='_blank'
          rel='noreferrer'
          aria-label='Enlace a GitHub'
        >
          <GitHubIcon />
        </a>
      </nav>
      <FooterMenu />
    </footer>
  )
}

export default Footer
