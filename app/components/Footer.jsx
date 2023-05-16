import React from 'react'
import LinkedIn from '../Icons/LinkedIn'
import GitHubIcon from '../Icons/GitHubIcon'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <footer className='border-t-2 flex justify-around p-4 bg-[#111] w-full'>
      <nav className='flex gap-3 pl-3  items-end'>
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
