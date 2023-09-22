import { useState } from 'react'
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './review/Home'
import './App.css'


function App() {
  
  return (
   
      <Routes>
  
        <Route exact path='/' element ={<Home/>}></Route>
      </Routes>
    
  )
}

export default App
