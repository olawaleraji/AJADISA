import React from 'react'
import Hero from './components/Home/Hero'
import About from './components/Home/About'
import Footer from './components/Footer'
import Features from './components/Home/Features'
import Faq from './components/Faq'
import Skill from './components/Skill'
import Customers from './components/Customers'
import Updates from './components/Updates'
import Built from './components/Built'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Features />
      <Customers />
      <Faq />
      <Updates />
      {/* <Built /> */}
      <Footer />
    </div>
  )
}

export default Home
