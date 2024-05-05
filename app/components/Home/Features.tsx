import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <div>
      <div className='relative py-16'>
        <div className='container relative m-auto px-6 text-gray-500 md:px-12'>
          <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3'>
            <div className='group space-y-6 border border-gray-100 rounded-3xl bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10'>
              <img
                className='mx-auto w-24 rounded-xl'
                src='https://media.istockphoto.com/id/1425828231/photo/young-man-uses-multiple-computers-while-coding-developing-web-site.webp?b=1&s=170667a&w=0&k=20&c=QhbfRSfTUztHQeuQLizPwEZUEo1AODn5r1unV1HZyPc='
                alt='illustration'
                loading='lazy'
              />
              <h3 className='text-2xl font-semibold text-gray-800'>
                Web development
              </h3>
              <p>
                I specialize in crafting sleek and functional web applications
                using cutting-edge technologies like React and Node.js. From
                front-end interfaces to back-end systems, I thrive on bringing
                ideas to life through clean code and intuitive design.
              </p>
            </div>
            <div className='group space-y-6 border border-gray-100 rounded-3xl bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10'>
              <img
                className='mx-auto w-24 rounded-xl'
                src='https://plus.unsplash.com/premium_photo-1684356820128-4c28da6d29df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VvfGVufDB8fDB8fHww'
                alt='illustration'
                loading='lazy'
              />
              <h3 className='text-2xl font-semibold text-gray-800'>Seo</h3>
              <p>
                I leverage strategic SEO techniques to boost search engine
                rankings and drive organic traffic to websites. By conducting
                thorough keyword research and implementing on-page
                optimizations, I ensure that my clients&apos; websites stand out
                in search engine results.
              </p>
            </div>
            <div className='group space-y-6 border border-gray-100 rounded-3xl bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10'>
              <img
                className='mx-auto w-24 rounded-xl'
                src='https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs='
                alt='illustration'
                loading='lazy'
              />
              <h3 className='text-2xl font-semibold text-gray-800'>
                Web Design
              </h3>
              <p>
                With a keen eye for detail and a passion for creativity, I
                design visually stunning and user-centric websites that
                captivate audiences and drive engagement. From wireframing to
                UI/UX design, I tailor every aspect of the design process to
                reflect each project&apos;s unique brand identity and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
