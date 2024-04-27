// 'use client'
// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleToggleNav = () => {
//       setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
//     }

//     const toggleNavCheckbox = document.getElementById('toggleNav')

//     if (toggleNavCheckbox) {
//       toggleNavCheckbox.addEventListener('change', handleToggleNav)

//       return () => {
//         toggleNavCheckbox.removeEventListener('change', handleToggleNav)
//       }
//     }
//   }, []) // Empty dependency array ensures this effect runs only after component mount

//   return (
//     <Router>
//       <header>
//         <nav className='w-full border-b dark:border-gray-700 bg-white dark:bg-gray-800 md:bg-transparent'>
//           <div className='container m-auto px-2 md:px-12 lg:px-7'>
//             <div className='flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0'>
//               <input
//                 type='checkbox'
//                 name=''
//                 id='toggleNav'
//                 className='peer hidden'
//               />
//               <label
//                 htmlFor='toggleNav'
//                 role='overlaynav'
//                 className='fixed left-0 top-0 transition-all md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 peer-checked:opacity-75 peer-checked:block w-full h-screen bg-gray-200 bg-opacity-75 dark:bg-darker dark:opacity-80'
//               ></label>
//               <div className='relative z-40'>
//                 <Link to='/' aria-label='logo'>
//                   <img
//                     src='images/logo.svg'
//                     className='w-32 sm:w-36 dark:hidden'
//                     alt='tailus logo'
//                     width='144'
//                     height='68'
//                   />
//                   <img
//                     src='images/logo-white.svg'
//                     className='w-32 sm:w-36 hidden dark:block'
//                     alt='tailus logo'
//                     width='144'
//                     height='68'
//                   />
//                 </Link>
//               </div>

//               <div
//                 id='navlinks'
//                 className='fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white dark:bg-gray-800 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max'
//               >
//                 <div className='z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full'>
//                   <ul className='pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0'>
//                     <li className='max-w-max'>
//                       <Link
//                         to='/'
//                         className='block md:px-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
//                       >
//                         Home
//                       </Link>
//                     </li>
//                     <li className='max-w-max'>
//                       <Link
//                         to='/about'
//                         className='block md:px-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
//                       >
//                         About
//                       </Link>
//                     </li>
//                     <li className='max-w-max'>
//                       <Link
//                         to='/contact'
//                         className='block md:px-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
//                       >
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                   <div className='flex sm:hidden pt-4 w-full'>
//                     <button
//                       type='button'
//                       title='Start buying'
//                       className='flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800'
//                     >
//                       <span className='block text-white text-sm'>Shop now</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className='block-endnav w-max flex items-center gap-4'>
//                 <button
//                   type='button'
//                   title='Start buying'
//                   className='hidden sm:block w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max'
//                 >
//                   <span className='block text-white text-sm'>Shop now</span>
//                 </button>

//                 <div className='flex items-center md:hidden max-h-10'>
//                   <label
//                     role='button'
//                     htmlFor='toggleNav'
//                     aria-label='humburger'
//                     id='hamburger'
//                     className='relative p-6 -mr-6'
//                   >
//                     <div
//                       role='hidden'
//                       id='line'
//                       className='m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300'
//                     ></div>
//                     <div
//                       role='hidden'
//                       id='line2'
//                       className='m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300'
//                     ></div>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//     </Router>
//   )
// }

// export default Nav

'use client'
import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Link from 'next/link'

type Props = {}

const NavbarOne = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('Home')

  const navigateTo = (page: string) => {
    setCurrentPage(page)
    // Close the menu when a page is selected
    setIsOpen(false)
  }

  return (
    <div>
      <nav className='relative bg-white'>
        <div className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <h1 className='flex-none italic text-xl font-semibold'>
                Ajao Dev
              </h1>
            </Link>
            <div className='flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                aria-label='toggle menu'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {!isOpen ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:justify-between`}
          >
            <div className='flex flex-col md:flex-row md:mx-6'>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform ${
                  currentPage === 'Home'
                    ? 'hover:text-blue-500'
                    : 'hover:text-gray-600'
                } md:mx-4 md:my-0`}
                href='#'
                onClick={() => navigateTo('Home')}
              >
                Home
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform ${
                  currentPage === 'About'
                    ? 'hover:text-blue-500'
                    : 'hover:text-gray-600'
                } md:mx-4 md:my-0`}
                href='#'
                onClick={() => navigateTo('About')}
              >
                About
              </a>
              <a
                className={`my-2 text-gray-700 transition-colors duration-300 transform ${
                  currentPage === 'Contact'
                    ? 'hover:text-blue-500'
                    : 'hover:text-gray-600'
                } md:mx-4 md:my-0`}
                href='#'
                onClick={() => navigateTo('Contact')}
              >
                Contact
              </a>
            </div>
          </div>
          <hr />
        </div>
      </nav>
      {/* Render content based on currentPage state */}
      {currentPage === 'Home' && <Home />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
    </div>
  )
}

export default NavbarOne
