import { useState } from 'react'
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './review/Home/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ParticlesBackground from './component/config/ParticlesBackground';


function App() {
  
  return (<div>
   <ParticlesBackground></ParticlesBackground>
      <Routes>
        
        <Route exact path='/' element ={<Home/>}></Route>
        
      </Routes>
      </div>
  )
}

export default App
