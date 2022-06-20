import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  console.log(props.prop)
if (props.prop.length === 0) {
  return null;
}

  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.prop.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map(item => {
          console.log(props.prop[item.attribute])
          return <NutritionalLabelFact key={item.id} label={item.label} value={props.prop[item.attribute]}/>
        })
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.value}</span>
    </li>
  )
}

export default NutritionalLabel
