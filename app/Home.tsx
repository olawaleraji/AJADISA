import React from 'react'
import Hero from './components/Home/Hero'
import About from './components/Home/About'
import Footer from './components/Footer'
import Features from './components/Home/Features'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  )
}

export default Home
