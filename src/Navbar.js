import React from "react"
import {Link, Route, Routes } from "react-router-dom"



const Navbar = () => {

    return (

    <div className="container mt-5  d-flex justify-content-around ">
       
<Routes>
<Route path='/posts/:id' element={<Link to='/posts'>Back</Link>}/>
<Route path='/' element={
<Link to='/'>Homepage</Link>
} />
</Routes>
    </div>
    )
}

export default Navbar