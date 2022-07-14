import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';

import About from './components/About';
import Saint from './components/Saint';
import Header from './components/Header';
import MenuSlider from './components/MenuSlider';
import Map from './components/Map';
import IconArrowLeft from './components/icons/IconArrowLeft';
import IconX from './components/icons/IconX';

import mapLayers from './content/mapLayers';
import pageContent from './content/serve/pages/index.json';

console.log("mapLayers", mapLayers);

export const RemoveTrailingSlash = ({...rest}) => {
    const location = useLocation()

    // If the last character of the url is '/'
    if (location.pathname.match('/.*/$')) {
        return <Navigate replace {...rest} to={{
            pathname: location.pathname.replace(/\/+$/, ""),
            search: location.search
        }}/>
    } else return null
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedMapLayer: "known_burial_locations",
      selectedSaint: null,
      lang: "en"
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
      this.Map.flyTo({ center: selectedSaint.location.coordinates });
    }
  }

  onSelectLang(lang) {
    if (lang === 'ar') document.body.classList.add("ar");
    else document.body.classList.remove("ar");
    this.setState({ lang });
  }

  renderSaint(o, addProps) {
    let props = {
      ...o,
      ...(addProps)?addProps:{},
      isSelected: this.state.selectedSaint && this.state.selectedSaint.name === o.name,
      onSelect: () => this.onSelectSaint(o)
    }

    return(
      <Saint
        {...props}
        lang={this.state.lang}
        isSelected={this.state.selectedSaint && this.state.selectedSaint.name === o.name}
        onSelect={() => this.onSelectSaint(o)}
      />
    )
  }

  render() {
    let mapLayer = mapLayers[this.state.selectedMapLayer];

    return(
      <div className="app-wrap__outer">
        <Header
          lang={this.state.lang}
          onSelectLang={this.onSelectLang.bind(this)}
        />

        <div className="app-wrap__inner">
          <Routes>
            <Route path="/" element={(
              <React.Fragment>
                <div className="side-menu__wrap">
                  <div className="saint-listing__wrap">
                    {mapLayer.items.map((o, i) => this.renderSaint(o, { key: o.id }))}
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

            <Route path="about" element={(
              <About
                content={pageContent.About}
                lang={this.state.lang}
              />
            )} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
