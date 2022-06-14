import React, { Fragment, useState, useEffect } from "react";
import AvailableCity from "./AvailableCity";
import "./City.css";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ObjectInfo from "../Objects/ObjectInfo";
import Search from "../Search/Search";
import ObjectFilter from "./ObjectFilter";
//useState = contentType = 0 (pilsetas) | 1 (apskates objektu) | 2 (detalizēts apraksts)

const City = () => {
  const [contentType, setContentType] = useState(0);
  const [loadedCityId, setLoadedCityId] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [objects, setObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  //Atlasīšana no datu bāzes
  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetch(
        "https://gala-darbs-2b35e-default-rtdb.firebaseio.com/Object.json"
      );
      //Ja kautkas aiziet greizi parādās paziņojums
      if (!response.ok) {
        throw new Error("Kautkas aizgāja greizi!");
      }

      const responseData = await response.json();

      const loadedObjects = [];
      //Nepieciešamie dati no datubāzes
      for (const key in responseData) {
        loadedObjects.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          picture: responseData[key].picture,
          type: responseData[key].type,
          type2: responseData[key].type2,
        });
      }

      setObjects(loadedObjects);
      setIsLoading(false);
    };

    fetchObjects().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="ObjectsLoading">
        <p className="loading">Loading...</p>
      </section>
    );
  }
//Ja ir kļūda, tad izvadās, kāda kļuda ir
  if (httpError) {
    return (
      <section className="ObjectsError">
        <p>{httpError}</p>
      </section>
    );
  }
 //Sadaļu maiņa
  const onCardChange = (cardId) => {
    setContentType(1);
    setLoadedCityId(cardId);
  };
  const onCheckDetails = (cardId) => {
    setContentType(2);
    setLoadedCityId(cardId);
  };
  const onButtonClick = () => {
    setContentType(0);
  };
  //Meklēšanas joslas funkcija
  const filteredSearchHandler = (selectedSearch) => {
    setFilteredSearch(selectedSearch);
  };
  //Funkcija kura atlasa objektu pēc tipa
  const objectFilter = objects.filter((object) => {
    return (
      object.name.toLowerCase().includes(filteredSearch.toLowerCase()) &&
      object.type === loadedCityId
    );
  });
  //Atlasīts apskates objekts pēc meklēšanas
  let selected = (
    <ObjectFilter items={objectFilter} onCheckDetails={onCheckDetails} />
  );
    //Definē mainīgo, kas satur apskates objektu detalizēto aprakstu
  let details = (
    <ObjectInfo onCheckDetails={onCheckDetails} loadedCityId={loadedCityId} />
  );
  //Definē mainīgo, kas satur pilsētas izvades komponenti
  let content = <AvailableCity onCardChange={onCardChange} />;
  let show = "hide";
  let show1 = "hide";
  //Pārbaudes, ja sadaļas mainās uz apskates objektu vai detalizēto aprakstu
  if (contentType === 1) {
    show = "visible";
    show1 = "visible";
    content = selected;
  } else if (contentType === 2) {
    content = details;
    show = "visible";
    show1 = "hide";
  }
  //Apskates objekta izvade
  return (
    <Fragment>
      <div className={show}>
        <Button
          style={{
            background: "#999",
            borderColor: "#888",
            marginBottom: "2rem",
          }}
          onClick={onButtonClick}
          type="primary"
          shape="circle"
          icon={<LeftOutlined />}
        />
      </div>
      <div className={show1}>
        <Search onChangeSearchFilter={filteredSearchHandler} />
      </div>
      <div className="grid">
        <ul>{content}</ul>
      </div>
    </Fragment>
  );
};

export default City;
