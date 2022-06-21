import "./ObjectItems.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { marked } from "marked";
const ObjectInfoItem = (props) => {
  //definē kartes lielumu
  const containerStyle = {
    width: "600px",
    height: "400px",
  };
  //definē kartes centra latitūdi un longtitūdi
  const center = {
    lat: props.lat,
    lng: props.lng,
  };
  return (
    //detalizētā apraksta izvade
    <div>
      <div className="name">{props.name}</div>
      <div className="text1">
        <img src={props.picture1} className="img1" />

        <div
          dangerouslySetInnerHTML={{ __html: marked(props.description1) }}
        ></div>
      </div>
      <div className="text2">
        <img src={props.picture2} className="img2" />
        <div
          dangerouslySetInnerHTML={{ __html: marked(props.description2) }}
        ></div>
      </div>
      <div
        className="
      map"
      >
        {/* Kartes komponente */}
        <LoadScript googleMapsApiKey="AIzaSyBlNRA5ZHM0g_IyFNVElzkCoERzKFPHa_M">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
export default ObjectInfoItem;
