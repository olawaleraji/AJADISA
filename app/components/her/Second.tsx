import React from 'react'

type Props = {}

const Second = (props: Props) => {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='p-6 space-y-8'>
          <main>
            <div className='container mx-auto space-y-16'>
              <section>
                <span className='block mb-2 text-xs font-medium tracki uppercase lg:text-center'>
                  How it works
                </span>
                <h2 className='text-5xl font-bold lg:text-center'>
                  Building with Mamba is simple
                </h2>
                <div className='grid gap-6 my-16 lg:grid-cols-3'>
                  <div className='flex flex-col p-8 space-y-4 rounded-md'>
                    <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full'>
                      1
                    </div>
                    <p className='text-2xl font-semibold'>
                      <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum,
                      architecto?
                    </p>
                  </div>
                  <div className='flex flex-col p-8 space-y-4 rounded-md'>
                    <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full'>
                      2
                    </div>
                    <p className='text-2xl font-semibold'>
                      <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor
                      veniam alias debitis?
                    </p>
                  </div>
                  <div className='flex flex-col p-8 space-y-4 rounded-md'>
                    <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900'>
                      3
                    </div>
                    <p className='text-2xl font-semibold'>
                      <b>Maxime.</b>Expedita temporibus culpa reprehenderit
                      doloribus consectetur odio!
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Second
