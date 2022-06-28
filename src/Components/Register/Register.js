import React from "react";
import './Register.css';
import {useFormik} from 'formik';
import axios from "axios";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
    const formValidate=(formValue)=>
    {
        const errors={};
        const fnameValidate = /^[a-zA-Z]{4,40} [a-zA-Z]{4,40}$/;
        const lnameValidate = /^[a-zA-Z]+$/;
        const emailValidate=/([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
        const passValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&!]).{4,10}$/;
        if(!formValue.fname)
        {
            errors.fname="Please enter the firstName"
        }
        else if (!fnameValidate.test(formValue.fname))
        {
           errors.fname="First Name must have atleast three characters" 
        }
        if(!formValue.lname)
        {
            errors.lname="Please enter the LastName"
        }
        else if (!lnameValidate.test(formValue.lname))
        {
           errors.lname="Last Name must have atleast three characters" 
        }
       
      if(!formValue.password)
        {
            errors.password="Please enter the password"
        }
        else if(!passValidate.test(formValue.password))
        {
            errors.password="Wrong Pattern";
        }
        if(!formValue.email)
        {
            errors.email="Please enter the E-mail"
        }
         else if (!emailValidate.test(formValue.email))
        {
        errors.email="Wrong Pattern";
         }
        console.log("Errors:",errors);
        return errors;
    }


const Register = () => {

    const navigate=useNavigate();
    
    const formik = useFormik({
        initialValues: {
           fname: '',
           lname: '',
            email: '',
            password: ''
        },
        validate:formValidate,
        onSubmit: (values) => { 
            console.log("Received Values:", values);
            axios.post("https://nodeprojectapi.herokuapp.com/register",values)
            .then( res=>{
                console.log("Data submitted successfully",res);
                alert("Data submitted successfully");
                window.sessionStorage.setItem("Token value",res.data.token);
                navigate('/Login')
            })
            .catch(err=>{
                console.log("Error to sub,it data",err)
            })
        }
    })


  

  return (
    <div className="container1">
    
              {/* <div className="icon_class"><AccountCircleIcon fontSize="150px"/></div> */}
              <div className="text">Sign Up</div>
    
      
        <form className='regForm' onSubmit={formik.handleSubmit}>
                <br />
                <input 
                    type="text"
                    name="fname"
                    placeholder="Enter first name"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <br />
                 <br />
                <input
                    type="text"
                    name="lname"
                    placeholder="Enter last name"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <br />
                 <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br />
      
                <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br />
               
                <br/>
                <Button className='submit' >Create Account</Button>
                <br />
            {/* </form> */}
        
            
            <p className="text-center ">
              <Link className='msg' to="/login">Already have an Account?</Link>
            </p>
            </form>
            </div>
            
    
    
  )
}
export default Register;


