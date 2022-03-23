import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';

import About from './components/About';
import Saint from './components/Saint';
import Header from './components/Header';
import MenuSlider from './components/MenuSlider';
import Map from './components/Map';
import IconArrowLeft from './components/icons/IconArrowLeft';
import IconX from './components/icons/IconX';

import mapLayers from './content/mapLayers';
import saints from './content/saints2';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedMapLayer: "known_burial_locations",
      selectedSaint: null
    }
  }

  onSelectMapLayer(selectedMapLayer) {
    if ("image" === mapLayers[selectedMapLayer].mapType) {
      this.setState({ selectedMapLayer: null });
    } else if (selectedMapLayer !== this.state.selectedMapLayer) {
      this.setState({ selectedMapLayer });
    }
  }

  onSelectSaint(selectedSaint) {
    if (selectedSaint === this.state.selectedSaint) {
      this.setState({ selectedSaint: null });
      this.Map.reset();
    } else {
      this.setState({ selectedSaint });
      this.Map.flyTo({ center: selectedSaint.data.coordinates });
    }
  }

  renderSaint(o, addProps) {
    let props = {
      ...o,
      ...(addProps)?addProps:{},
      isSelected: this.state.selectedSaint && this.state.selectedSaint.data.name === o.data.name,
      onSelect: () => this.onSelectSaint(o)
    }

    return(
      <Saint
        {...props}
        isSelected={this.state.selectedSaint && this.state.selectedSaint.data.name === o.data.name}
        onSelect={() => this.onSelectSaint(o)}
      />
    )
  }

  render() {
    let mapLayer = mapLayers[this.state.selectedMapLayer];

    return(
      <div className="app-wrap__outer">
        <Header />

        <div className="app-wrap__inner">
          <Routes>
            <Route path="/" element={(
              <React.Fragment>
                <div className="side-menu__wrap">
                  <div className="saint-listing__wrap">
                    {mapLayer.items.map((o, i) => this.renderSaint(o, { key: `saint-${i}` }))}
                  </div>

                  {this.state.selectedSaint && (
                    <div className="saint-details__wrap">
                      <div className="saint-details__controls" onClick={() => this.onSelectSaint(this.state.selectedSaint)}>
                        <p>
                          {"<-- Back to list"}
                        </p>

                        <IconX />
                      </div>

                      { this.renderSaint(this.state.selectedSaint, {
                          selected: true,
                          inactive: true
                        })}
                    </div>
                  )}
                </div>

                <div className="page-wrap">
                  <div className="map-nav">
                    <p>Select map layer:</p>

                    <div className="map-nav__buttons">
                      {
                        Object.keys(mapLayers).map((k, i) => (
                          <button key={`layer-button-${i}`} onClick={() => this.onSelectMapLayer(k)}>
                            {mapLayers[k].displayName}
                          </button>
                        ))
                      }
                    </div>
                  </div>

                  {"mapbox" === mapLayer.type
                    ? <Map
                        title={"asdf"}
                        ref={ref => this.Map = ref}
                        items={mapLayer.items}
                        initialViewState={mapLayer.initialViewState}
                        selectedItem={this.state.selectedSaint}
                        onClick={(item) => this.onSelectSaint(item)}
                        initialViewState={mapLayer.initialViewState}
                        // onMove={evt => console.log(evt)}
                      />
                    : <div className="print-map" />
                  }
                </div>
              </React.Fragment>
            )} />

            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
