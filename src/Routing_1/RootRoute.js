import React,{lazy,Suspense} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Header from '../Layout/Header'
import PNF from '../Components/PageNotFound/PNF'
import Restaurant from '../Components/restaurant/restaurant'
import Menu1 from '../Components/menu1/menu1'
import DishesCategory from '../Components/Dishes/DishesCategory/DishesCategory'
import DishesDetails from '../Components/Dishes/DishesDetails/DishesDetails'
import Home from '../Components/Home/Home'
import Footer from '../Layout/Footer'
import Register from '../Components/Register/Register'
import Login from '../Components/Login/Login'
import ProtectedRoute from '../Routing_1/ProtectedRoute'
const Reservation=lazy(()=>import( '../Components/reservation/reservation'));
export default function RootRoute() {
  return (
            <>
            <Router>
              <Header/>
              <Suspense fallback={<h3>Loading....</h3>}>
            <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="restaurant" element={<Restaurant/>}/>
            <Route path="menu1" element={<Menu1/>}/>
            <Route path="DishesCategory" element={<DishesCategory/>}/>
            <Route path="DishesDetails/:d_id" element={<DishesDetails/>}/>
            <Route element={<ProtectedRoute/>}>
            <Route path="reservation" element={<Reservation/>}/>
            </Route>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<PNF/>}/> 
            </Routes>
            <Footer/>
            </Suspense>
            </Router>
            </>
  )
}
