import ReactMapboxGl, { Popup, Marker, ZoomControl } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

require("mapbox-gl/dist/mapbox-gl.css");

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API,
  logoPosition: "top-left",
});

export default function MapBox({ title, coordinates }) {

  const moreInfo = () => {
    const popup = document.querySelector('.mapboxgl-popup');

    popup.classList.toggle('visible-popup');
  };

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          height: "400px",
          width: "100%",
        }}
        center={coordinates}
        zoom={[14]}
      >
        <ZoomControl/>
        <Popup
          coordinates={coordinates}
          offset={{
            "bottom-left": [12, -38],
            bottom: [0, -38],
            "bottom-right": [-12, -38],
          }}
          className="marker-popup"
        >
          <p className="text-xl mb-0">{ title }</p>
        </Popup>
        <Marker coordinates={coordinates} onClick={() => moreInfo()}>
          <span className="text-6xl" role="img" aria-label="push-pin">
            📌
          </span>
        </Marker>
      </Map>
    </div>
  );
}
