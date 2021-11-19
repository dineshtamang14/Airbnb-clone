import { useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search results object into the
  // {latitude: 52.00, longitude: 13.54}
  // object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // the latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

    const [viewport, setViewPort] = useState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    });

    return (
      <ReactMapGL
        mapStyle="mapbox://styles/dineshtamang/ckw65yq3f5b3p15o61mcgqz88"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(viewport) => setViewPort(viewport)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role="img"
                aria-label="push-pin"
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
              >
                📌
              </p>
            </Marker>

            {/* the popup that should show if we click on a marker */}
            {selectedLocation.lon === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
    );
}

export default Map;