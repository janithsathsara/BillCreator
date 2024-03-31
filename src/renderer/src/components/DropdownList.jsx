import { useState, useEffect, useRef } from 'react'

const DropdownList = ({ options, onAdd }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [returnObj, setReturnObj] = useState({ itemName: '', amount: '', itemPrice: '' })
  const inputRef = useRef(null)

  useEffect(() => {
    console.log(selectedOption)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [selectedOption])

  const handleSelect = (optionId) => {
    const option = options.find((option) => option.id === optionId)
    setSelectedOption(option)
  }

  const handleCancel = () => {
    setSelectedOption(null)
    setReturnObj({ itemName: '', amount: '', itemPrice: '' })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value)

    if (!isNaN(value)) {
      setReturnObj({
        ...returnObj,
        amount: value,
        itemName: selectedOption.item,
        itemPrice: selectedOption.price * value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSelectedOption(null)
    onAdd(returnObj)
    setReturnObj({ itemName: '', amount: '', itemPrice: '' })
  }

  return (
    <div>
      <select
        value={selectedOption ? selectedOption.id : ''}
        onChange={(e) => handleSelect(parseInt(e.target.value))}
        className="dropdownList"
      >
        <option value="" className="dropdownItems">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.item}
          </option>
        ))}
      </select>
      {selectedOption && (
        <form onSubmit={handleSubmit}>
          <div>{selectedOption.item}</div>
          <div>
            <input
              type="number"
              name="amount"
              min={0}
              onChange={handleChange}
              value={returnObj.amount}
              ref={inputRef}
            />
          </div>
          <div className="description">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default DropdownList
