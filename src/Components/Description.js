import React from 'react'
import ImgProduct1 from '../img/men-fashion-free-img.jpg'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './../CSS/Style.css'

function Details() {
  const [data, setData] = useState()
  const { id } = useParams()

  const fetchData = async () => {
    setTimeout(() => {
      const mockData = {
        id: '1',
        product_url: 'url',
        title: 'Product Title',
        price: 100,
        reviews: ['Product Specifications'],
        stock: 'In Stock',
        desc: 'Product Description',
        img: ['../img/men-fashion-free-img.jpg'],
        rating: 2,
        site: 'shophive',
        category: 'Apple',
      }
      setData(mockData)
    }, 1000) // Simulating a delay of 1 second
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color='gold' />)
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color='gray' />)
      }
    }
    return stars
  }

  if (data) {
    return (
      <div className='container-fluid py-5'>
        <div className='row px-xl-5'>
          <div className='col-lg-5 pb-5'>
            <div
              id='product-carousel'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner border'>
                <img
                  className='w-100 h-100'
                  src={ImgProduct1}
                  alt='Product'
                  onClick={() => {
                    console.log('Click happened')
                  }}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-7 pb-5'>
            <h3 className='font-weight-semi-bold'>{data.title}</h3>
            <div className='d-flex mb-3'>
              <small className='pt-1'>({data.reviews.length} Reviews)</small>
            </div>
            <h3 className='font-weight-semi-bold mb-4'>Rs: {data.price}</h3>
            <p className='mb-4'>{data.stock}</p>

            <h3 className='font-weight-semi-bold mb-2'>Site: {data.site}</h3>
            <h3 className='font-weight-semi-bold mb-4'>
              Category: {data.category}
            </h3>
            {data.rating !== 'null' && (
              <h3 className='font-weight mb-2 rating-starts'>
                {renderStars(data.rating)}
              </h3>
            )}

            <div className='d-flex align-items-center mb-4 pt-2'>
              <button
                className='btn btn-primary px-3'
                style={{
                  backgroundColor: 'rgb(0, 65, 90)',
                  color: 'white',
                  padding: '10px 15px',
                }}
              >
                Add To Favourite
              </button>
              <div>
                <button
                  onClick={() => {
                    window.open(data.product_url, '_blank')
                  }}
                  className='btn btn-primary px-3'
                  style={{
                    backgroundColor: 'rgb(0, 65, 90)',
                    color: 'white',
                    padding: '10px 15px',
                    margin: '10px 15px',
                  }}
                >
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row px-xl-5 ml-2'>
          <h4 className='mb-3'>Product Description</h4>
          <p
            style={{
              color: '#082137',
            }}
          >
            {data.desc}
          </p>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Details
