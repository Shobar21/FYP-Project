import React from 'react'
import Navbar from '../Components/Navbar'
import Offers from '../Components/Offers'
import Website from '../Components/Website'
import Products from '../Components/Products'
import Footer from '../Components/Shared/Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <Website />
      <Products doesShow={true} />
      <Offers />
      <Footer />
    </div>
  )
}

export default Home
