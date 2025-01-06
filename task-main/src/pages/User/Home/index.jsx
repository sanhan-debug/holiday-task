import React from 'react'
import Slider from '../../../components/User/Slider/index'
import Features from '../../../components/User/Features'
import Products from '../Products'
import About from '../About'
import Cards from '../../../components/User/Cards'

function Home() {
  return (
    <>
    <Slider/>
    <Features/>
    <Products/>
    <About/>
    <Cards/>
    </>
  )
}

export default Home