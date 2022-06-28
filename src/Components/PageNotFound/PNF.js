import React from 'react'
import "./PNF.css"
import { Button,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function PNF() {
  return (
    
      
      
      <Card className="bg-dark text-white ">
  <Card.Img src="images/pnf_image3.jpg" alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title className="heading4">Ooops......</Card.Title>
    <Card.Text className="heading5">
      Sorry..It might looks like the page you are looking for doesn't exist!!!!!
    </Card.Text>
  <Button variant="primary" className="button1"><Link className="Link1" to="/">Go to Home page</Link></Button>
  </Card.ImgOverlay>
</Card>
      
    
  )
}
