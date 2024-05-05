import React, { Profiler } from 'react'
import Contacty from './components/Contacty'
import Footer from './components/Footer'
import Profile from './components/Profile'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
      <Contacty />
      <Profile />
      <Footer />
    </div>
  )
}

export default Contact
