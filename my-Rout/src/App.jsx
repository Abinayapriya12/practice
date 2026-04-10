import React from 'react'
import{BrowserRouter,Routes,Route}from "react-router-dom"
import Login from './assets/pages/Login'
import Register from "./assets/pages/Register"

function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>  
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
