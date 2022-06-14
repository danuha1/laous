import React, { Fragment, useState, useEffect } from "react";
import "./ObjectInfo.css";

import ObjectInfoItem from "./ObjectInfoItem";
//useState = contentType = 0 (pilsetas) | 1 (apskates objektu)

const ObjectInfo = (props) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        "https://gala-darbs-2b35e-default-rtdb.firebaseio.com/Details.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedDetails = [];

      for (const key in responseData) {
        loadedDetails.push({
          id: key,
          name: responseData[key].name,
          description1: responseData[key].description1,
          picture1: responseData[key].picture1,
          description2: responseData[key].description2,
          picture2: responseData[key].picture2,
          type2: responseData[key].type2,
          lat: responseData[key].lat,
          lng: responseData[key].lng,
        });
      }

      setDetails(loadedDetails);
      setIsLoading(false);
    };

    fetchDetails().catch((error) => {
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

  if (httpError) {
    return (
      <section className="ObjectsError">
        <p>{httpError}</p>
      </section>
    );
  }

  const selectedDetails = details.filter((detail) => {
    return detail.type2 === props.loadedCityId;
  });

  let selected = selectedDetails.map((detail) => {
    return (
      <ObjectInfoItem
        key={detail.id}
        id={detail.id}
        name={detail.name}
        description1={detail.description1}
        picture1={detail.picture1}
        description2={detail.description2}
        picture2={detail.picture2}
        type2={detail.type2}
        lat={detail.lat}
        lng={detail.lng}
      />
    );
  });

  return <div>{selected}</div>;
};

export default ObjectInfo;
