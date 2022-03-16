import React from 'react';
import Map from 'react-map-gl';

function MapOfFes() {
  return (
    <div class="map__wrap">
      <Map
        initialViewState={{
          longitude: -4.974272,
          latitude: 34.063711,
          zoom: 14.5
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYnJhZHlyc2hlcmlkYW4iLCJhIjoiY2t6enk2MzY0MGV0dzNkcWhiM2ptYXhubiJ9.5yDutwKDTWJVl11IYQ9naQ"
      />
    </div>
  );
}

export default MapOfFes;
