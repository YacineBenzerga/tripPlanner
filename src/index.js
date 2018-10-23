const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoieWFjaW51c2NyYXN1cyIsImEiOiJjamdvNTI5Ym0yMHp6MnFxbmQ4N3U3a2h1In0.om2qC7kxmSCDCSpIKFJybg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = buildMarker('hotels', [-74.009, 40.705]);
marker.addTo(map);
