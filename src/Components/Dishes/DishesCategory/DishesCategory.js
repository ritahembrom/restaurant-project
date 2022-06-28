import React from 'react'
import {Button,Card,Row,Col} from 'react-bootstrap'
import DishesJSON from '../Dishes.json'
import { Link } from 'react-router-dom';
import './DishesCategory.css'
export default function DishesCategory() {
  
  return (
    <div className='menu_photo'>
    <Row xs={1} sm={2} md={3} lg={3} xl={3} >
      {DishesJSON.Dishes.map((x)=>{
        return(

        <React.Fragment key={x.Dish_id}>
        

<Col>
          <Card  className='card1'>
    <Card.Img variant="top" src={x.Dish_img} />
    <Card.Body className="subcard">
      <Card.Title>{x.Dish_Name}</Card.Title>
      <Button variant="primary">
            <Link to={`/DishesDetails/${x.Dish_id}`}
            className="subBtn">
            View More
            </Link>
          </Button>
    </Card.Body>
    <Card.Footer className="subcard">
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
          </React.Fragment>
          )
          })
          }
   </Row> 
</div>

  )
}

