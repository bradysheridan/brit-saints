import React from 'react';
import Mapbox, { Marker } from 'react-map-gl';
import ImageTomb from '../assets/images/tomb.png';

class Map extends React.Component {
  constructor(props) {
    super(props);

  }

  reset() {
    let o = {
      center: [this.props.initialViewState.longitude, this.props.initialViewState.latitude],
      zoom: this.props.initialViewState.zoom
    }

    this.Mapbox.flyTo(o);
  }

  flyTo(params) {
    let o = {
      zoom: 18,
      ...params?params:{}
    }

    this.Mapbox.flyTo(o);
  }

  render() {
    return (
      <div className="map__wrap">
        <Mapbox
          ref={ref => this.Mapbox = ref}
          initialViewState={this.props.initialViewState}
          onMove={this.props.onMove}
          style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/bradyrsheridan/ckzzyaa8h000414t5upfnkly4"
          mapboxAccessToken="pk.eyJ1IjoiYnJhZHlyc2hlcmlkYW4iLCJhIjoiY2t6enk2MzY0MGV0dzNkcWhiM2ptYXhubiJ9.5yDutwKDTWJVl11IYQ9naQ"
        >
          {this.props.items.map((item, i) => (
            <Marker
              key={`marker-${i}`}
              longitude={item.location.coordinates[0]}
              latitude={item.location.coordinates[1]}
              onClick={() => this.props.onClick(item)}
            >
              <img
                src={ImageTomb}
                width={38}
                height={"auto"}
                style={this.props.selectedItem && this.props.selectedItem.id === item.id
                  ? {border: '1px dashed black', padding: 4, borderRadius: '50%'}
                  : {}} />
            </Marker>
          ))}
        </Mapbox>
      </div>
    );
  }
}

export default Map;
