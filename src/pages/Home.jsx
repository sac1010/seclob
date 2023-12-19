import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full'>
        <Header/>
        <Section/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home