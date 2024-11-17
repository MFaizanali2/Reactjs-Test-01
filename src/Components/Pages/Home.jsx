import React from 'react'
import Header from '../Header/Header'
import Banner from '../Header/Banner'
import DualBanner from '../Header/DualBanner'
import Feature from '../Context/Feature'
import ThirdBanner from '../Header/ThirdBanner'
import NewArrival from '../Header/NewArrival'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DualBanner />
      <Feature />
      <ThirdBanner />
      <NewArrival />
    </div>
  )
}

export default Home
