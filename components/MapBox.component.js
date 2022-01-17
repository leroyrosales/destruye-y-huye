import { useState } from "react";
import ReactMapboxGl, { Popup, Marker, Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

require("mapbox-gl/dist/mapbox-gl.css");

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API,
  logoPosition: "top-left",
});

export default function MapBox({ coordinates }) {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          height: "400px",
          width: "100%",
        }}
        center={coordinates}
        zoom={[14]}      >
        <Marker
          coordinates={coordinates}
        >
          <span className="text-6xl" role="img" aria-label="push-pin">
            📌
          </span>
        </Marker>
      </Map>
    </div>
  );
}
