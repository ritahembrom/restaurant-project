import React,{useEffect} from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './Header.css'
export default function Header() {
  const nav=useNavigate();
  const loggingout=() =>{
    window.sessionStorage.clear();
    alert("You have successfully logged out from the account")
    nav('/LogIn')
  }
     let location=useLocation();
     useEffect(()=>{
       console.log("Location:",location,"\nPathName",location.pathname)
     },[location]);

     const isAuth=window.sessionStorage.getItem('Token value');



  return (

    <div className='navbar_image'>
      <Navbar bg="light" expand="lg">
      <div className='nav-logo'>
      <img src="images/logo.png"  alt="app-logo" />
</div>
  <Container fluid>
    <h1 className="heading">Fine Dining</h1>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 navbar1"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/" className='Link1'>Home</Nav.Link>|
        <Nav.Link href="/restaurant" className='Link1'>Restaurant</Nav.Link>|
        <Nav.Link href="/menu1" className='Link1'>Menu</Nav.Link>|
        <Nav.Link href="/reservation" className='Link1'>Reservation</Nav.Link>|
        {
        !isAuth?
        <>
        <Nav.Link href="/login" className='Link1'>Login</Nav.Link>|
        <Nav.Link href="/register" className='Link1'>Register</Nav.Link>
        </>
        :
        <Button onClick={loggingout}>LogOut</Button>
      }
      </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    
  )
}
