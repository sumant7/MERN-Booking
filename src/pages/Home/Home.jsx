import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/featured'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse</h1>
        <PropertyList/>
        <h1 className="homeTitle"> Home Guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
      </div>
  )
}

