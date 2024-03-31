import React from 'react'
import datalog from '../../itemList.js'

const Catalogue = () => {
  const data = datalog.map((item) => (
    <div key={item.id} className="itemContainer">
      <div className="description">
        <h4 className="label">{item.item}</h4>
        <h4 className="label">Rs {item.price}/=</h4>
      </div>
      <div className="img-container">
        <img src={item.imgSrc} alt="item Image" className="itemImage" />
        janith
      </div>
    </div>
  ))
  return <div className="catContainer">{data}</div>
}

export default Catalogue
