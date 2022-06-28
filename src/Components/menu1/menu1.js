import React from 'react'
import './menu1.css'
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Menu1() {
  return (
    <div className='background'>
        <Card className="bg-dark text-white ">
  <Card.Img src="../../../../images/view-menu.jpg" alt="Card image" />
  <Card.ImgOverlay className='menu'>
  <div className='Card1'>
    <Card.Title className='heading' >~ Fine Dining Menu ~</Card.Title>
    </div>
    <div className='Text'>
    <Card.Text >
    We have retained the classics & customer favorites from commercial drive and main street location on our menu, added handpicked chef specials from different states to tantalize your taste buds.
    </Card.Text>
    <Button variant="primary"><Link className="view" to='/DishesCategory'>Explore</Link></Button>
    </div>
  </Card.ImgOverlay>
</Card>
    </div>
  )
}
