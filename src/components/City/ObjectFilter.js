import React from "react";
import "./CityFilter.css"
import ObjectItems from "../Objects/ObjectItems";
const ObjectFilter = (props) => {
  const Filter = props.items.map((object) => (
    <ObjectItems
    key={object.id}
    id={object.id}
    name={object.name}
    description={object.description}
    picture={object.picture}
    type={object.type}
    type2={object.type2}
    onCheckDetails={props.onCheckDetails}
  />
  ));

  return (
    <div className="filter">
      <ul>
    { Filter }
    </ul>
    </div>);
};
export default ObjectFilter;
