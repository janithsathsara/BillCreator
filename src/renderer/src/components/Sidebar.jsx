import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/Catalogue">
        <div className="linkButton ">Catalogue</div>
      </Link>
      <Link to="/Additem">
        <div className="linkButton">Additem</div>
      </Link>
      <Link to="/CreateBill">
        <div className="linkButton">CreateBill</div>
      </Link>
    </div>
  )
}

export default Sidebar
