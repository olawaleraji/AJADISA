import React from 'react'

type Props = {}

function Built ({}: Props) {
  return (
    <section>
      <div className='grid gap-6 lg:grid-cols-3'>
        <div className='overflow-hidden rounded lg:flex lg:col-span-3'>
          <img
            src='https://source.unsplash.com/random/485x365'
            alt=''
            className='object-cover w-full h-auto max-h-96 dark:bg-gray-500'
          />
          <div className='p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-900'>
            <span className='self-start px-3 py-1 text-sm rounded-full dark:bg-violet-400 dark:text-gray-900'>
              Business
            </span>
            <h2 className='text-3xl font-bold md:flex-1'>
              Curating a workplace that inspires team movement
            </h2>
            <div>
              <p className='dark:text-gray-400'>November 30, 2020</p>
              <p className='dark:text-gray-400'>By Leroy Jenkins</p>
            </div>
          </div>
        </div>
        <div className='p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900'>
          <h3 className='inline font-medium dark:text-gray-50'>
            Panel-based blocks.
          </h3>
          <p className='inline'>
            Flexible panels that are perfect for building functional layouts.
          </p>
        </div>
        <div className='p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900'>
          <h3 className='inline font-medium dark:text-gray-50'>
            Responsive design.
          </h3>
          <p className='inline'>Panels look great no matter the device.</p>
        </div>
        <div className='p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-900'>
          <h3 className='inline font-medium dark:text-gray-50'>
            Premium support.
          </h3>
          <p className='inline'>
            Join over 50 000 satisfied customers who use our templates.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Built
