import React from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from './components/Home';
import Add from './components/Add';
import Edit from "./components/Edit";
import Search from "./components/Search";


const App = ()=>{
  return(
    <>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/add" element ={<Add/>} />
      <Route exact path="/edit/:_id" element ={<Edit/>} />   
      <Route exact path="/search/:topic" element={<Search/>} />
      <Route exact path="/search/" element={<Home/>} />
      {/* <Route element={<Home/>} /> */}
    </Routes>
    </div>
    </>
  );
}

export default App;