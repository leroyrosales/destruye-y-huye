import { useState } from "react"
import ReactMapboxGl, { Popup, Marker, ZoomControl, Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API,
  logoPosition: "top-left",
  scrollZoom: false,
});

export default function AllLocations({ allLocations }) {
  const [ listLocations, updateListLocations ] = useState("");

  const convertLatLng = (string) => {
    const [lat, lng] = string.split(",");
    const converted = { lng, lat };
    return converted;
  };

  const showAvailableMembers = () => {
    const locationJsx = [];
    allLocations.map((location, i) => (
      locationJsx.push(
        <div key={i} onClick={(e) => moreInfo(e)}>
        <Popup
          coordinates={convertLatLng(location.coords)}
          offset={{
            "bottom-left": [12, -38],
            bottom: [0, -38],
            "bottom-right": [-12, -38],
          }}
          className="marker-popup z-90"
        >
          <p className="text-lg mb-0">
            <a href={`/locations/${location.slug}`}>{location.title}</a>
          </p>
        </Popup>
        <Marker
          coordinates={convertLatLng(location.coords)}
          anchor="bottom"
        >
          <span className="text-6xl" role="img" aria-label="push-pin">
            📌
          </span>
        </Marker>
      </div>
      )
    ))
    updateListLocations(locationJsx)
  }
  if( !listLocations && allLocations.length ){
    showAvailableMembers();
  }

  const moreInfo = (e) => {
    const popup = e.target.parentElement.previousSibling;

    if( ! popup ) return;

    if( popup.classList.contains('mapboxgl-popup') ) {
      popup.classList.toggle('visible-popup');
    }
  };

  return (
    <>
      <Map
        style="mapbox://styles/mapbox/streets-v8?optimize=true"
        containerStyle={{
          height: "600px",
          width: "100%",
          marginBottom: "40px",
        }}
        center={[-97.72, 30.265]}
        zoom={[13]}
      >
        <ZoomControl/>
        {listLocations}
      </Map>
    </>
  );
}
