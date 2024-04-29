import React from 'react'

type Props = {}

function Built ({}: Props) {
  return (
    <div className=''>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
            My Projects
          </h2>
          <p className='mt-1 text-gray-600'>
            A Journey Through My Coding Adventures
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <a
            className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300'
            href='#'
          >
            <div className='aspect-w-16 aspect-h-11'>
              <img
                className='w-full object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                alt='Image Description'
              />
            </div>
            <div className='my-6'>
              <h3 className='text-xl font-semibold text-gray-800'>
                Announcing a free plan for small teams
              </h3>
              <p className='mt-5 text-gray-600'>
                At Wake, our mission has always been focused on bringing
                openness.
              </p>
            </div>
            <div className='mt-auto flex items-center gap-x-3'>
              <div>
                <h5 className='text-sm text-gray-800'>By Ajao Dev</h5>
              </div>
            </div>
          </a>
          <a
            className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5'
            href='#'
          >
            <div className='aspect-w-16 aspect-h-11'>
              <img
                className='w-full object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80'
                alt='Image Description'
              />
            </div>
            <div className='my-6'>
              <h3 className='text-xl font-semibold text-gray-800'>
                How Google Assistant now helps you record stories for kids
              </h3>
              <p className='mt-5 text-gray-600'>
                Google is constantly updating its consumer AI, Google Assistant,
                with new features.
              </p>
            </div>
            <div className='mt-auto flex items-center gap-x-3'>
              <div>
                <h5 className='text-sm text-gray-800'>By Ajao Dev</h5>
              </div>
            </div>
          </a>

          <a
            className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5'
            href='#'
          >
            <div className='aspect-w-16 aspect-h-11'>
              <img
                className='w-full object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80'
                alt='Image Description'
              />
            </div>
            <div className='my-6'>
              <h3 className='text-xl font-semibold text-gray-800'>
                Front accounts - let&apos;s work together
              </h3>
              <p className='mt-5 text-gray-600'>
                Are you an accountant? Are you a company formation advisor?
              </p>
            </div>
            <div className='mt-auto flex items-center gap-x-3'>
              <div>
                <h5 className='text-sm text-gray-800'>By Ajao Dev</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='grid lg:grid-cols-2 gap-6'>
          <a className='group relative block rounded-xl' href='#'>
            <div className='flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70'>
              <img
                className='size-full absolute top-0 start-0 object-cover'
                src='https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80'
                alt='Image Description'
              />
            </div>

            <div className='absolute top-0 inset-x-0 z-10'>
              <div className='p-4 flex flex-col h-full sm:p-6'>
                <div className='flex items-center'>
                  <div className='ms-2.5 sm:ms-4'>
                    <h4 className='font-semibold text-white'>Ajao Dev</h4>
                    <p className='text-xs text-white/80'>Jan 09, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute bottom-0 inset-x-0 z-10'>
              <div className='flex flex-col h-full p-4 sm:p-6'>
                <h3 className='text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80'>
                  Facebook is creating a news section in Watch to feature
                  breaking news
                </h3>
                <p className='mt-2 text-white/80'>
                  Facebook launched the Watch platform in August
                </p>
              </div>
            </div>
          </a>

          <a className='group relative block rounded-xl' href='#'>
            <div className='flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70'>
              <img
                className='size-full absolute top-0 start-0 object-cover'
                src='https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                alt='Image Description'
              />
            </div>

            <div className='absolute top-0 inset-x-0 z-10'>
              <div className='p-4 flex flex-col h-full sm:p-6'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <img
                      className='size-[46px] border-2 border-white rounded-full'
                      src='https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
                      alt='Image Description'
                    />
                  </div>
                  <div className='ms-2.5 sm:ms-4'>
                    <h4 className='font-semibold text-white'>Ajao Dev</h4>
                    <p className='text-xs text-white/80'>March 30, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute bottom-0 inset-x-0 z-10'>
              <div className='flex flex-col h-full p-4 sm:p-6'>
                <h3 className='text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80'>
                  What CFR (Conversations, Feedback, Recognition) really is
                  about
                </h3>
                <p className='mt-2 text-white/80'>
                  For a lot of people these days, Measure What Matters.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Built
