import React from "react";
import CityList from "./CityList/CityList";
import "./CityFilter.css"
const CityFilter = (props) => {
  const Filter = props.items.map((cities) => (
    <CityList
      key={cities.id}
      id={cities.id}
      name={cities.name}
      description={cities.description}
      picture={cities.picture}
      type={cities.type}
      onCardChange={props.onCardChange}
    />
  ));

  return (
    <div className="filter">
      <ul>
    { Filter }
    </ul>
    </div>);
};
export default CityFilter;
