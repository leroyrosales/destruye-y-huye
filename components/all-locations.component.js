import { useState } from "react"
import ReactMapboxGl, { Popup, Marker, ZoomControl } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API,
  logoPosition: "top-left",
  scrollZoom: false,
});

export default function AllLocations({ allLocations }) {
  const [ listLocations, updateListLocations ] = useState("");

  const showAvailableMembers = () => {
    const locationJsx = [];
    allLocations.map((location, i) => (
      locationJsx.push(
        <div key={i} onClick={(e) => moreInfo(e)}>
        <Popup
          coordinates={[location.coords.lat, location.coords.lng]}
          className="marker-popup z-90"
          offset={{
            bottom: [15, -38],
          }}
        >
          <p className="text-lg mb-0">
            <a href={`/locations/${location.slug}`}>{location.title}</a>
          </p>
        </Popup>
        <Marker
          coordinates={[location.coords.lat, location.coords.lng]}
          anchor="bottom-left"
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
