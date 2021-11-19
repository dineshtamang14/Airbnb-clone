import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376, 
    zoom: 11,
  });

    return (
      <ReactMapGL
       mapStyle="mapbox://styles/dineshtamang/ckw65yq3f5b3p15o61mcgqz88" 
       mapboxApiAccessToken={process.env.mapbox_key}
       {...viewport}
       >

       </ReactMapGL>
    );
}

export default Map;