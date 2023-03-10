import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 40.370036,
  lng: -80.232861
};

const position = {
  lat: 40.370036,
  lng: -80.232861
};

const onLoadMarker = marker => {
  console.log('onLoadMarker: ', marker);
};


function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAP_API}`
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(map);
  return isLoaded ? (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>

      <Marker
        icon={"/images/icon/location-pin.png"}
        position={position}
        onLoad={onLoadMarker}
      />

    </GoogleMap>
  ) : <></>;
}

export default React.memo(MapComponent);