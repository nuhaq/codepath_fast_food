import * as React from "react"
import "./Chip.css"

export function Chip({ handleClick, menu, label = "", isActive = false}) {
  let buttonClassName = "";
  if (isActive) {
    buttonClassName = "chip active"
  }
  else {
    buttonClassName = "chip"
  }
  return (
    <button onClick={() => {
      menu ? handleClick(menu) : handleClick(label)
    }} className={buttonClassName}>
      <p className="label">{menu ? menu.item_name : label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}


export default Chip
