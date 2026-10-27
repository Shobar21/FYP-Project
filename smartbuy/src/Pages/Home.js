import React from 'react'
import Navbar from '../Components/Navbar'
import Offers from '../Components/Offers'
import Website from '../Components/Website'
import Products from '../Components/Products'
import Footer from '../Components/Shared/Footer'
import Featured from '../Components/Featured'
function Home() {
  return (
    <div>
      <Navbar />
      <Website />
      <Products doesShow={true} />
      <Offers />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
