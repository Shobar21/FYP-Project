import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../service/Service'
import { getProducts } from '../service/Service'

// grey box shown when a product image cannot be loaded
const NO_IMAGE =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='220'><rect width='100%' height='100%' fill='#eeeeee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='#888888'>No image</text></svg>",
  )

const FeaturedProducts = ({ doesShow }) => {
  const [products, setProducts] = useState()

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />)
    }
    if (halfStar) {
      stars.push(<CiStar key={fullStars} />)
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<CiStar key={fullStars + (halfStar ? 1 : 0) + i} />)
    }
    return stars
  }

  const getData = async () => {
    getProducts(0, 16).then((item) => {
      setProducts(item)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const featuredStyle = {
    width: '100%',
    marginTop: '80px',
    display: doesShow ? 'block' : 'none',
  }

  const rowStyle = {
    marginTop: doesShow ? '1.5rem' : '90px',
  }

  if (!products) return null

  const linkStyle = {
    textDecoration: 'none', // Remove text decoration
    color: 'inherit', // Use the default text color
  }

  return (
    <Container>
      <Row>
        <h2 style={featuredStyle}>Featured Products</h2>{' '}
      </Row>
      <Row style={rowStyle}>
        {products.map((product) => (
          <Col key={product._id || product.id} xs={12} sm={6} md={4} lg={3}>
            <Link to={'/details/1'} style={linkStyle}>
              {' '}
              {/* Apply style here */}
              <Card className='mb-3'>
                <img
                  src={product.images && product.images[0]}
                  alt='Product'
                  referrerPolicy='no-referrer'
                  loading='lazy'
                  style={{ width: '100%', height: '220px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = NO_IMAGE
                  }}
                />
                {/* <Card.Img
                  variant='top'
                  src='https://www.shophive.com/media/catalog/product/cache/3617b85921733ef3774cdbec091e1c0f/i/m/image-removebg-preview-_53__1_4.jpg'
                /> */}
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Card.Text>Category: {product.category}</Card.Text>
                  {/* <div>{renderStars(product.rating)}</div> */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

// const products = [
//   {
//     id: 1,
//     title: "Product 1",
//     imgSrc: "sports-shoe1-600x600.jpg",
//     price: "$10",
//     category: "Category 1",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     imgSrc: "sports-shoe3-600x600.jpg",
//     price: "$15",
//     category: "Category 2",
//     rating: 4,
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     imgSrc: "women-fashion-free-img.jpg",
//     price: "$155",
//     category: "Category 3",
//     rating: 4,
//   },
//   {
//     id: 4,
//     title: "Product 4",
//     imgSrc: "men-fashion-free-img.jpg",
//     price: "$15",
//     category: "Category 4",
//     rating: 4,
//   },
//   {
//     id: 5,
//     title: "Product 5",
//     imgSrc: "product-accessory1-600x600.jpg",
//     price: "$15",
//     category: "Category 5",
//     rating: 4,
//   },
//   {
//     id: 6,
//     title: "Product 6",
//     imgSrc: "product-bag1-600x600.jpg",
//     price: "$15",
//     category: "Category 6",
//     rating: 4,
//   },
//   {
//     id: 7,
//     title: "Product 7",
//     imgSrc: "product-m-jeans1-600x600.jpg",
//     price: "$15",
//     category: "Category 7",
//     rating: 4,
//   },
//   {
//     id: 8,
//     title: "Product 8",
//     imgSrc: "product-w-jeans4-600x600.jpg",
//     price: "$15",
//     category: "Category 8",
//     rating: 4,
//   },
//   {
//     id: 9,
//     title: "Product 9",
//     imgSrc: "sports-shoe1-600x600.jpg",
//     price: "$10",
//     category: "Category 9",
//     rating: 4.5,
//   },
//   {
//     id: 10,
//     title: "Product 10",
//     imgSrc: "sports-shoe3-600x600.jpg",
//     price: "$15",
//     category: "Category 10",
//     rating: 4,
//   },
//   {
//     id: 11,
//     title: "Product 11",
//     imgSrc: "women-fashion-free-img.jpg",
//     price: "$155",
//     category: "Category 11",
//     rating: 4,
//   },
//   {
//     id: 12,
//     title: "Product 12",
//     imgSrc: "men-fashion-free-img.jpg",
//     price: "$15",
//     category: "Category 12",
//     rating: 4,
//   },
// ];

export default FeaturedProducts
