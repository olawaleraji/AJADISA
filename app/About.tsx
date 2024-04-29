import React from 'react'
import Footer from './components/Footer'
import Abouty from './components/Home/About'
import Skill from './components/Skill'
import Features from './components/Home/Features'
import Customers from './components/Customers'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
      <Abouty />
      <Skill />
      <Features />
      <Customers />
      <Footer />
    </div>
  )
}

export default About
