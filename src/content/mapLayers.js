import saints from './serve/saints/index.json';

console.log('saints', saints);

if (!saints) {
  throw "Saint data failed to format during the build phase. Please notify the site's developer.";
}

export default {
  "normative": {
    type: "mapbox",
    displayName: "al-rijāl",
    initialViewState: {
      longitude: -4.9729,
      latitude: 34.0650,
      zoom: 14.84083
    },
    items: saints.filter((o, i) => o.map_layer === "al-rijāl")
  },
  "known_burial_locations": {
    type: "mapbox",
    displayName: "al-waliyāt",
    initialViewState: {
      longitude: -4.9729,
      latitude: 34.0650,
      zoom: 14.84083
    },
    items: saints.filter((o, i) => o.map_layer === "al-waliyāt")
  },
  "unknown_burial_locations": {
    type: "image",
    displayName: "al-waliyāt ghayr ma’rūf",
    initialViewState: {
      longitude: -4.990,
      latitude: 34.028,
      zoom: 11.93
    },
    items: saints.filter((o, i) => o.map_layer === "al-waliyāt ghayr ma’rūf")
  }
};
