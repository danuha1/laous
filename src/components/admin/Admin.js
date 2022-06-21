import React, { useRef } from "react";
import { Tabs } from "antd";
import "./Admin.css";
const { TabPane } = Tabs;

const onChange = (key) => {};
const Admin = (props) => {
  const cityNameRef = useRef("");
  const objectNameRef = useRef("");
  const detailsNameRef = useRef("");
  const cityDescriptionRef = useRef("");
  const objectDescriptionRef = useRef("");
  const detailsDescription1Ref = useRef("");
  const detailsDescription2Ref = useRef("");
  const cityTypeRef = useRef("");
  const objectTypeRef = useRef("");
  const objectType2Ref = useRef("");
  const detailsType2Ref = useRef("");
  const cityPictureRef = useRef("");
  const objectPictureRef = useRef("");
  const detailsPicture1Ref = useRef("");
  const detailsPicture2Ref = useRef("");
  const detailsLatRef = useRef();
  const detailsLngRef = useRef();
  function submitCityHandler(event) {
    event.preventDefault();

    const city = {
      name: cityNameRef.current.value,
      description: cityDescriptionRef.current.value,
      type: cityTypeRef.current.value,
      picture: cityPictureRef.current.value,
    };
    props.onAddCity(city);
  }
  function submitObjectHandler(event) {
    event.preventDefault();

    const object = {
      name: objectNameRef.current.value,
      description: objectDescriptionRef.current.value,
      type: objectTypeRef.current.value,
      type2: objectType2Ref.current.value,
      picture: objectPictureRef.current.value,
    };
    props.onAddObject(object);
  }
  function submitDetailsHandler(event) {
    event.preventDefault();

    const details = {
      name: detailsNameRef.current.value,
      description1: detailsDescription1Ref.current.value,
      description2: detailsDescription2Ref.current.value,
      type2: detailsType2Ref.current.value,
      picture1: detailsPicture1Ref.current.value,
      picture2: detailsPicture2Ref.current.value,
      lat: detailsLatRef.current.value,
      lng: detailsLngRef.current.value,
    };
    props.onAddDetails(details);
  }

  return (
    <Tabs onChange={onChange} type="card" style={{ marginLeft: "35rem" }}>
      <TabPane tab="Cities" key="1">
        <form onSubmit={submitCityHandler}>
          <div className="city">
            <div>
              <label htmlFor="name">Name</label>
              <input className="one" type="text" id="name" ref={cityNameRef} />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                className="two"
                rows="5"
                id="description"
                ref={cityDescriptionRef}
              ></textarea>
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <input
                className="three"
                type="text"
                id="type"
                ref={cityTypeRef}
              />
            </div>
            <div>
              <label htmlFor="picture">Picture</label>
              <input
                className="four"
                type="text"
                id="picture"
                ref={cityPictureRef}
              />
            </div>
            <div>
              <button>Add city</button>
            </div>
          </div>
        </form>
      </TabPane>
      <TabPane tab="Objects" key="2">
        <form onSubmit={submitObjectHandler}>
          <div className="city">
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="one"
                type="text"
                id="name"
                ref={objectNameRef}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                rows="5"
                id="description"
                ref={objectDescriptionRef}
                className="two"
              ></textarea>
            </div>
            <div>
              <label htmlFor="picture">Picture</label>
              <input
                className="five"
                type="text"
                id="picture"
                ref={objectPictureRef}
              />
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <input
                className="six"
                type="text"
                id="type"
                ref={objectTypeRef}
              />
            </div>
            <div>
              <label htmlFor="type2">Type2</label>
              <input
                className="seven"
                type="text"
                id="type"
                ref={objectType2Ref}
              />
            </div>
            <button>Add object</button>
          </div>
        </form>
      </TabPane>
      <TabPane tab="Details" key="3">
        <form onSubmit={submitDetailsHandler}>
          <div className="city">
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="one"
                type="text"
                id="name"
                ref={detailsNameRef}
              />
            </div>
            <div>
              <label htmlFor="description1">Description1</label>
              <textarea
                rows="5"
                id="description1"
                ref={detailsDescription1Ref}
                className="description1"
              ></textarea>
            </div>
            <div>
              <label htmlFor="description2">Description2</label>
              <textarea
                className="description1"
                rows="5"
                id="description2"
                ref={detailsDescription2Ref}
              ></textarea>
            </div>
            <div>
              <label htmlFor="picture1">Picture1</label>
              <input
                className="nine"
                type="text"
                id="picture1"
                ref={detailsPicture1Ref}
              />
            </div>
            <div>
              <label htmlFor="picture2">Picture2</label>
              <input
                className="nine"
                type="text"
                id="picture2"
                ref={detailsPicture2Ref}
              />
            </div>
            <div>
              <label htmlFor="Lat">Lat</label>
              <input
                className="ten"
                type="number"
                id="Lat"
                ref={detailsLatRef}
              />
            </div>
            <div>
              <label htmlFor="Lng">Lng</label>
              <input
                className="eleven"
                type="number"
                id="Lng"
                ref={detailsLngRef}
              />
            </div>
            <div>
              <label htmlFor="type2">Type2</label>
              <input
                className="twelve"
                type="text"
                id="type2"
                ref={detailsType2Ref}
              />
            </div>
            <button>Add details</button>
          </div>
        </form>
      </TabPane>
    </Tabs>
  );
};

export default Admin;
