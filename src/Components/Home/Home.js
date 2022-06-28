import React from 'react'
import './Home.css'
import {Carousel} from 'react-bootstrap';
export default function Home() {
  return (
    <div className='Home1' id="home">
      <Carousel fade>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL+"images/slider1.jpg"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='heading1'>Welcome !</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL+"images/slider2.jpg"}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='heading1'>Traditional Indian Cuisine</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL+"images/slider3.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='heading1'>Products</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
