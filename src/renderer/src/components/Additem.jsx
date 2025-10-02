import React, { useState } from 'react'

const Additem = () => {
  const [formData, setFormData] = useState({ item: '', price: '', fileLocation: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCancel = () => {
    setFormData({ item: '', price: '', fileLocation: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.electron.ipcRenderer.send('add-item', formData)
    console.log(formData)
    setFormData({ item: '', price: '', fileLocation: '' })
  }

  const openFileSelector = () => {
    window.electron.ipcRenderer.send('open-file-dialog', {
      title: 'Title',
      defaultPath: localStorage.getItem('defaultPath')
    })

    window.electron.ipcRenderer.on('open-file-paths', (event, data) => {
      setFormData({
        ...formData,
        fileLocation: data.filePaths[0]
      })
      console.log(data.filePaths[0])
    })
  }
  return (
    <form onSubmit={handleSubmit} className="itemForm">
      <h1 className="label mainLabel">Add Items</h1>
      <div className="input-container">
        <h2 className="label">Item Name</h2>
        <input
          type="text"
          name="item"
          placeholder="Item"
          onChange={handleChange}
          value={formData.item}
          className="textField"
        />
      </div>
      <div className="input-container">
        <h2 className="label">Item Price</h2>
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={formData.price}
          className="textField"
        />
      </div>
      <div className="input-container">
        <h2 className="label">Item Price</h2>
        {formData.fileLocation === '' ? (
          <button onClick={openFileSelector} className="submitButton textField">
            Select Photo
          </button>
        ) : (
          <button className="disabled-button textField" disabled>
            Image Selected
          </button>
        )}
      </div>
      <div className="input-container">
        <h2 className="label">Submit</h2>
        <button className="submitButton textField">Submit</button>
      </div>
      <div className="input-container">
        <h2 className="label">Cancel</h2>
        <button className="submitButton textField" onClick={handleCancel}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Additem
