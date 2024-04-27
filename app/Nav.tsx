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
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className='px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between lg:justify-center lg:space-x-16'>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                to='/'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href='/'
            aria-label='Company'
            title='Company'
            className='inline-flex items-center'
          >
            <svg
              className='w-8 text-deep-purple-accent-400'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              Company
            </span>
          </a>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                to='/'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='Company'
                        title='Company'
                        className='inline-flex items-center'
                      >
                        <svg
                          className='w-8 text-deep-purple-accent-400'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'
                        >
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Our product'
                          title='Our product'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Product pricing'
                          title='Product pricing'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='About us'
                          title='About us'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Sign in'
                          title='Sign in'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Sign in
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                          aria-label='Sign up'
                          title='Sign up'
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* Rest of your code */}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Nav
