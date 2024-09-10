import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Bar from '../../components/Bar/Bar'

const Home = () => {
  return (
    <div className='hero-nav-conteiner max-h-[1500px] mx-auto bg-[#2A303C] py-7'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home