import { Card, Container,Row,Col} from 'react-bootstrap';
import React from 'react'
import { useParams } from 'react-router-dom'
import DishesJSON from '../Dishes.json'
export default function DishesDetails() {
  let data_id= useParams();
  console.log("useParams value in subcategory :", data_id);

  let identifier = DishesJSON.Dishes.find((x) => x.Dish_id === data_id.d_id);
    
  console.log("DishItem:", identifier);
return(
 
  <div className='details'>
      
    <Container>
      

     <Row xs={1} md={3} >
      { 
       identifier.category.map((data_id) =>
           <Col key={data_id.cat_id}>

            <Card className='css1'>
                 <Card.Img variant="top" src={data_id.img1}/>
                <Card.Body>
                  <Card.Title> <h4>{data_id.cat_name}</h4></Card.Title>
                    <Card.Title>Price:{data_id.Price}</Card.Title>
                   <Card.Text>{data_id.Desc}</Card.Text>
                 
                 
              </Card.Body>
            </Card>
           </Col>
         )
         }
    </Row> 

    </Container>
 
    </div>
)

}