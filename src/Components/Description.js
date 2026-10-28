import React from 'react'
import ImgProduct1 from '../img/men-fashion-free-img.jpg'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const [data, setData] = useState()
  const { id } = useParams()

  const fetchData = async () => {
    setTimeout(() => {
      // Mock data
      const mockData = {
        title: 'Product Title',
        price: 100,
        spec: 'Product Specifications',
        desc: 'Product Description',
        link: 'https://example.com',
      }
      setData(mockData)
    }, 1000) // Simulating a delay of 1 second
  }

  useEffect(() => {
    fetchData()
  }, [])

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
                  alt='Image'
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
              <small className='pt-1'>(0 Reviews)</small>
            </div>
            <h3 className='font-weight-semi-bold mb-4'>Rs: {data.price}</h3>
            <p className='mb-4'>{data.spec}</p>

            <div className='d-flex align-items-center mb-4 pt-2'>
              <button
                className='btn btn-primary px-3'
                style={{
                  backgroundColor: 'rgb(0, 65, 90)',
                  color: 'white', // Text color
                  padding: '10px 15px', // Padding
                }}
              >
                Add To Favourite
              </button>
              <div>
                <button
                  onClick={() => {
                    window.open(data.link, '_blank')
                  }}
                  className='btn btn-primary px-3'
                  style={{
                    backgroundColor: 'rgb(0, 65, 90)',
                    color: 'white', // Text color
                    padding: '10px 15px',
                    margin: '10px 15px', // Padding
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
