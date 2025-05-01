// Initialize map
const gedungSateCoor = [-6.9025, 107.6191];
const myMap = L.map('map', {
  zoom: 15,
  center: gedungSateCoor,
  scrollWheelZoom: false,
});
 
// Set base map
const osmTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmTile = L.tileLayer(osmTileUrl, {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
// osmTile.addTo(myMap);
// Add MapTiler layer
const mtLayer = L.maptilerLayer({
  apiKey: '9vYygbEhdZ8xx8FBfhQJ',
  style: 'https://api.maptiler.com/maps/01968b5c-8d18-7b9e-9988-5a97735f1c0b/style.json?key=ZB6y7qm2IdpbB1maQMh4', // Optional
});
mtLayer.addTo(myMap);