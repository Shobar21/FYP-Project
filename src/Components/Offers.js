import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import backgroundImage from '../img/banner-03.jpg' // Import your background image

const SpecialOffer = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    width: '100vw',
    height: '100vh',
    color: 'white',
    marginTop: ' 80px',
  }

  return (
    <div style={containerStyle}>
      <Container>
        <Row>
          <Col md={6}>
            <div style={{ padding: '20px', margin: '20px' }}>
              {' '}
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Limited Time Offer
              </div>
              <div style={{ fontSize: '18px', marginTop: '10px' }}>
                Special Edition
              </div>
              <div style={{ marginTop: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <div style={{ marginTop: '20px' }}>
                Buy This T-shirt At 20% Discount, Use Code{' '}
                <strong>OFF20</strong>
              </div>
            </div>
            <Button variant='light'>Shop Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpecialOffer
