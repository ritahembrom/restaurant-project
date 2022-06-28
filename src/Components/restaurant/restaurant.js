import React from 'react'
import './restaurant.css'
export default function Restaurant() {
  return (
    <div className='Restaurant'>
 <div className="container ">
        <div class="row" id="Restaurant" >
            <div className="col navMenu ">
                <h2 className="text-center heading2" >~ Restaurant ~</h2>
            </div>
          </div>
          <div className="row bg-light" >
            <div className="col-md-6">
              <h3>Location</h3>
              <p>Thanks for stopping by. We are the last authentic Indian restaurant in India, serving delicious Indian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
              <h5>A Unique Experience</h5>
              <p>Thanks for stopping by. We are the last authentic Indian restaurant in India, serving delicious India cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb India culinary experience.</p>
            </div>
            <div className="col-md-6" >
              <img className="img-fluid" src={process.env.PUBLIC_URL+"images/location1.jpg"} alt="img1"/>
            </div>
          </div>
          <div className="row bg-light"><br /></div>
          <div className="row bg-light">
            <div className="col-md-6 order-md-1 order-2" >
              <img className="img-fluid " src={process.env.PUBLIC_URL+"images/location2.jpg"} alt="img2" />
            </div>
            <div className="col-md-6 order-md-12 order-1">
              <h3>Cuisine</h3>
              <p>Thanks for stopping by. We are the last authentic Indian restaurant in India, serving delicious Indian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Indian culinary experience.</p>
              <h5>A Unique Experience</h5>
              <p>Thanks for stopping by. We are the last authentic Indian restaurant in India, serving delicious Indian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
            </div>
          </div>
    </div>
    <br/>
    </div>
  )
}
