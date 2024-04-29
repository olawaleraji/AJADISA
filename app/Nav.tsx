'use client'
import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Link from 'next/link'
import Blog from './Blog'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('Home')

  const navigateTo = (page: React.SetStateAction<string>) => {
    setCurrentPage(page)
    setIsOpen(false)
  }

  return (
    <header>
      <nav className='w-full border-b bg-white md:bg-transparent'>
        <div className='container m-auto px-2 md:px-12 lg:px-7'>
          <div className='flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0'>
            <input
              type='checkbox'
              name=''
              id='toggleNav'
              className='peer hidden'
            />
            <label
              htmlFor='toggleNav'
              role='overlaynav'
              className='fixed left-0 top-0 transition-all md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 peer-checked:opacity-75 peer-checked:block w-full h-screen bg-gray-200 bg-opacity-75'
            ></label>
            <div className='relative z-40'>
              <Link href='' aria-label='logo'>
                <h1 className='flex-none italic text-xl font-semibold'>
                  Ajao Dev
                </h1>
              </Link>
            </div>

            <div
              id='navlinks'
              className='fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max'
            >
              <div className='z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full'>
                <ul className='pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0'>
                  <li className='max-w-max lg:mt-4'>
                    <a
                      href='#'
                      className={`block md:px-3 ${
                        currentPage === 'Home' ? 'active' : ''
                      }`}
                      onClick={() => navigateTo('Home')}
                    >
                      Home
                    </a>
                  </li>
                  <li className='max-w-max lg:mt-4'>
                    {' '}
                    <a
                      href='#'
                      className={`block md:px-3 ${
                        currentPage === 'About' ? 'active' : ''
                      }`}
                      onClick={() => navigateTo('About')}
                    >
                      About
                    </a>
                  </li>
                  <li className='max-w-max lg:mt-4'>
                    <a
                      href='#'
                      className={`block md:px-3 ${
                        currentPage === 'Contact' ? 'active' : ''
                      }`}
                      onClick={() => navigateTo('Contact')}
                    >
                      Contact
                    </a>
                  </li>
                  <li className='max-w-max lg:mt-4'>
                    <a
                      href='#'
                      className={`block md:px-3 mr-8 ${
                        currentPage === 'Blog' ? 'active' : ''
                      }`}
                      onClick={() => navigateTo('Blog')}
                    >
                      Blog
                    </a>
                  </li>
                  <li className='max-w-max'>
                    <button
                      type='button'
                      title='Start buying'
                      className='w-full py-3 whitespace-nowrap px-6 text-center rounded-xl transition bg-gray-900 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800'
                    >
                      <span className='block text-white text-sm'>Shop now</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:hidden absolute top-2 right-8 w-max flex items-center gap-4'>
          <div className='flex items-center md:hidden max-h-10'>
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <label
                  role='button'
                  htmlFor='toggleNav'
                  aria-label='humburger'
                  id='hamburger'
                  className='relative p-6 -mr-6'
                >
                  <div
                    role='hidden'
                    id='line'
                    className='m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300'
                  ></div>
                  <div
                    role='hidden'
                    id='line2'
                    className='m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300'
                  ></div>
                </label>
              ) : (
                <label
                  role='button'
                  htmlFor='toggleNav'
                  aria-label='humburger'
                  id='hamburger'
                  className='relative p-6 -mr-6'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </label>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Render content based on currentPage state */}
      {currentPage === 'Home' && <Home />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Blog' && <Blog />}
    </header>
  )
}

export default Nav
