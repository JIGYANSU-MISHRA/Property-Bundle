import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import About from '../sections/About'
import PopularAreas from '../sections/PopularAreas'
import Properties from '../sections/Properties'
import Services from '../sections/Services'
import Client from '../sections/Client'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <PopularAreas/>
      <Properties/>
      <Services/>
      <Client/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
