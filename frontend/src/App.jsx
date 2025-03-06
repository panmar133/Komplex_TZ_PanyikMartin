import { useState } from 'react'
import Navbar from './Navbar';
import Home from './oldalak/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route index element={<Home />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App