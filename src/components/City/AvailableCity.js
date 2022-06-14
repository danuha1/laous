import React, { useEffect, useState } from "react";
import "./AvailableCity.css";
import Name from "./Name";
import Search from "../Search/Search";
import CityFilter from "./CityFilter";
var city = "Pilsētas";
const AvailableCountry = (props) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [filteredSearch, setFilteredSearch] = useState("");
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        "https://gala-darbs-2b35e-default-rtdb.firebaseio.com/Cities.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedCities = [];

      for (const key in responseData) {
        loadedCities.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          picture: responseData[key].picture,
          type: responseData[key].type,
        });
      }

      setCities(loadedCities);
      setIsLoading(false);
    };

    fetchCities().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="CountryLoading">
        <p className="loading">Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="CountryError">
        <p>{httpError}</p>
      </section>
    );
  }
  const filteredSearchHandler = (selectedSearch) => {
    setFilteredSearch(selectedSearch);
  };
  const citiesFilter = cities.filter((cities) => {
    return cities.name.includes(filteredSearch);
  });
 
 let cityList = (
  <CityFilter
  items={citiesFilter}
  onCardChange={props.onCardChange}
/>
 )
  
  return (
    <div>
      <Name name={city} />
      <Search onChangeSearchFilter={filteredSearchHandler} />
      <div className="countryGrid">
        <ul>{cityList}</ul>
      </div>
    </div>
  );
};
export default AvailableCountry;
