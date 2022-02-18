import ReactMapboxGl, { Marker, Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API,
  logoPosition: "top-left",
});

const allCoords = [
    [-97.709000, 30.270519],
    [-97.731270, 30.270090],
    [-97.724830, 30.249640],
]

export default function AllLocations() {
    
  return (
    <>
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          height: "600px",
          width: "100%",
        }}
        center={[-97.709000, 30.270519]}
        zoom={[14]}
      >
        {allCoords.map( coord => (
            <Marker coordinates={coord} anchor="bottom">
            <span className="text-6xl" role="img" aria-label="push-pin">
              📌
            </span>
          </Marker>
        ))}
      </Map>
    </>
  );
}
