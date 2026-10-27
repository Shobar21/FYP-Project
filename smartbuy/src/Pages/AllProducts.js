import React from 'react'
import Navbar from '../Components/Shared/Navbar'
import Products from '../Components/Products'
import Footer from '../Components/Shared/Footer'
function AllProducts() {
  return (
    <div>
      <Navbar />
      <Products doesShow={false} />
      <Footer />
    </div>
  )
}

export default AllProducts
