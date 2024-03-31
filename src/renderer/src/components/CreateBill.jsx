import React, { useState, useEffect } from 'react'
import datalog from '../../itemList.js'
import DropdownList from './DropdownList.jsx'

const CreateBill = () => {
  const [allItems, setAllItems] = useState([])

  const addItem = (item) => {
    setAllItems([...allItems, item])
  }

  useEffect(() => {
    console.log(allItems)
  }, [allItems])
  return (
    <div>
      <DropdownList options={datalog} onAdd={addItem} />
      {allItems.map((item) => (
        <div key={item.itemName}>
          <h1>{item.itemName}</h1>
          <h4>{item.itemPrice}</h4>
          <h4>{item.amount}</h4>
        </div>
      ))}
    </div>
  )
}

export default CreateBill
