const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoieWFjaW51c2NyYXN1cyIsImEiOiJjamdvNTI5Ym0yMHp6MnFxbmQ4N3U3a2h1In0.om2qC7kxmSCDCSpIKFJybg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10'
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
