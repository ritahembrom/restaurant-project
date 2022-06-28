import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import {ImInstagram} from 'react-icons/im';
export default function Footer() {
  return (
    <div className="location1">
        <div className="row OurLocation" id="OurLocation" >
          <div className="col navMenu">
            <h2 className="text1">~ Our Location ~</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h3>Address:</h3>
            <p>Test street no 78963 </p>
            <h3>Email:</h3>
            <p>mail@example.com</p>
          </div>
          <div className="col-md-3">
            <h3>Address:</h3>
            <p>Test street no 78963 </p>
            <h3>Email:</h3>
            <p>mail@example.com</p>
          </div>
          <div className="col-md-3">
            <h3>Address:</h3>
            <p>Test street no 78963 </p>
            <h3>Email:</h3>
            <p>mail@example.com</p>
          </div>
          <div className="col-md-3">
            <h3>Address:</h3>
            <p>Test street no 78963 </p>
            <h3>Email:</h3>
            <p>mail@example.com</p>
          </div>
        </div>
        <div className="footer1 row">
          <div className="col">
            <p className="text2">Follow us: 
              <a className="social-icon1" href="https://www.facebook.com/"> <AiFillFacebook/></a>
              <a className="social-icon2" href="https://www.instagram.com/?hl=en"><ImInstagram/></a></p>
          </div>
          <div className="col">
            <p className="text2">Copyright &copy; 2022</p>
          </div>
          <div className="col">
            <p className="text2">Powered by: <a href="#">with love</a></p>
          </div>
        </div>
    </div>
 
  )
}
