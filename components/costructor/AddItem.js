import "./AddItem.css"
import { useState } from "react"

const AddItem = ({ isChecked, text, cost, onClick }) => {
  return (
    <div className="additem" onClick={onClick}>
      <span className={`additem__checkbox ${isChecked ? "active" : ""}`}></span>
      <div className="additem__content">
        <span className="additem__text">{text}</span>
        <span className="additem__cost">+{cost} руб.</span>
      </div>
    </div>
  )
}

export default AddItem
