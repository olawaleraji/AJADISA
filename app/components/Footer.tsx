import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <footer>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='-mb-0.5 w-full'
          viewBox='0 0 1367.743 181.155'
        >
          <path
            className='fill-current text-gray-100 dark:text-gray-800'
            id='wave'
            data-name='wave'
            d='M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z'
            transform='translate(1.743 66.155)'
          ></path>
        </svg>
        <div className='bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1'>
          <div className='container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20'>
            <div className='grid grid-cols-8 gap-6 md:gap-0'>
              <div className='col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3'>
                <div className='flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0'>
                  <Link href='' aria-label='logo'>
                    <h1 className='flex-none italic text-xl font-semibold'>
                      Ajao Dev
                    </h1>
                  </Link>
                  <div className='flex gap-6'>
                    <Link
                      href='#'
                      target='_blank'
                      className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='24'
                        height='24'
                        viewBox='0 0 48 48'
                      >
                        <path
                          fill='#212121'
                          fill-rule='evenodd'
                          d='M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z'
                          clip-rule='evenodd'
                        ></path>
                        <path
                          fill='#fff'
                          d='M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z'
                        ></path>
                        <polygon
                          fill='#fff'
                          points='15.866,34 23.069,25.656 22.127,24.407 13.823,34'
                        ></polygon>
                        <polygon
                          fill='#fff'
                          points='24.45,21.721 25.355,23.01 33.136,14 31.136,14'
                        ></polygon>
                      </svg>
                    </Link>

                    <Link
                      href='#'
                      target='_blank'
                      className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='24'
                        height='24'
                        viewBox='0 0 50 50'
                      >
                        <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                      </svg>
                    </Link>

                    <Link
                      href='#'
                      target='_blank'
                      className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-span-8 md:col-span-6 lg:col-span-5'>
                <div className='grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16'>
                  <div>
                    <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                      Company
                    </h6>
                    <ul className='mt-4 list-inside space-y-4'>
                      <li>
                        <a href='#' className='transition hover:text-cyan-600'>
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                      Products
                    </h6>
                    <ul className='mt-4 list-inside space-y-4'>
                      <li>
                        <a href='#' className='transition hover:text-cyan-600'>
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                      Resources
                    </h6>
                    <ul className='mt-4 list-inside space-y-4'>
                      <li>
                        <a href='#' className='transition hover:text-cyan-600'>
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-8 md:pl-16'>
                  <p className='text-xs text-gray-600'>
                    © Copyright {currentYear} PROJECT SURVIVOR.
                  </p>
                  <span>All right reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
