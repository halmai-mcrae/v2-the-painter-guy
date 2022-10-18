import React from 'react'

import {
  About,
  Footer,
  Header,
  Services,
  Team,
  Testimonial,
  Work,
} from './container'

import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
