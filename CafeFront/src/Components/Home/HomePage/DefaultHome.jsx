import React from 'react'
import HomeNavbar from '../Home/HomeNavbar'
import HomePage from './HomePage'
import ItemsData from './Cards/ItemsData'
import SearchBar from './SearchBar'
import Footer from '../Footerr/Footerr'

const DefaultHome = () => {
  return (
    <>
      <HomeNavbar />
      <HomePage />
      {/* <SearchBar />
      <ItemsData />
      <Footer /> */}
    </>
  )
}

export default DefaultHome