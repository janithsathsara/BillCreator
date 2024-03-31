import React from 'react'

const BillComponent = (props) => {
  return (
    <div>
      <h1>item is {props.item}</h1>
      <h1>item price is {props.price}</h1>
    </div>
  )
}

export default BillComponent
