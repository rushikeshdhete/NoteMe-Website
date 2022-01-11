import React, { useState } from "react";
import {NavLink} from 'react-router-dom';


const Navbar = ()=>{

  const [search, setsearch] = useState("");
  const InputChange = (e)=>{
    setsearch(e.target.name = e.target.value);
  }




    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <NavLink className="navbar-brand" to="/">NoteME</NavLink>
 
 <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav ">
     <li className="nav-item ml-2">
       <NavLink className="nav-link" to="/">Home </NavLink>
     </li>
     <li className="nav-item ml-2">
       <NavLink className="nav-link" to="/add">Add</NavLink>
     </li>
     
   </ul>
   <div className="form-inline ml-auto">
    <input className="form-control mr-sm-2" type="search" placeholder="Search Topic" aria-label="Search" 
        value={search}
        name="search"
        onChange={(e)=>InputChange(e)}
    />
    <NavLink className="btn btn-outline-success my-2 my-sm-0"  to = {`/search/${search}`}>Search</NavLink>
  </div>
  
 </div>
  </div>
</nav>
        </>
    );
}
export default Navbar;