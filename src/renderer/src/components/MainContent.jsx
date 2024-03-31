import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalogue from './Catalogue'
import Additem from './Additem'
import CreateBill from './CreateBill'

const MainContent = () => {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/" element={<Catalogue />}></Route>
        <Route path="/Catalogue" element={<Catalogue />}></Route>
        <Route path="/Additem" element={<Additem />}></Route>
        <Route path="/CreateBill" element={<CreateBill />}></Route>
      </Routes>
    </div>
  )
}

export default MainContent
