import React from "react";
import './Login.css'
import {useFormik} from 'formik';
import axios from "axios";
import { Button } from "react-bootstrap";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
const formValidate=(formValue)=>
    {
        const errors={};
        let emailValidate=/^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/
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

const Login = () => {
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate:formValidate,
        onSubmit: (values) => { 
            console.log("Received Values:", values);
            axios.post("https://nodeprojectapi.herokuapp.com/login",values)
            .then( res=>{
                console.log("Data submitted successfully",res.data);
                alert("Data submitted successfully");
                window.sessionStorage.setItem("Token value",res.data.token);
                navigate('/Reservation')
           
            })
            .catch(err=>{
                console.log("Error to sub,it data",err)
            })
        }
    })
    return (
        <div className="outer">
            {/* <div className="icon_class"><AccountCircleIcon  fontSize="80px"/></div> */}
              <div className="text5">Sign In</div>
            <form className='LogInForm' onSubmit={formik.handleSubmit}>
                    <br />
    <br/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    /><br />
    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    /><br />
    <br/>
                    <Button type="submit" className='submit'>LogIn</Button>
                    <br />
                </form>
        </div>
      )
    }
    export default Login;

