import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>

   
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hellom Vite!</h1>
    
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <div>    <main id="map" class="map"></main>
 </div>

  </div>
`

setupCounter(document.querySelector('#counter'))




// Inisialisasi peta dengan koordinat Jakarta
var map = L.map('map').setView([-6.2088, 106.8456], 13);

// Menambahkan layer tile dari OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Koordinat
const indonesiaCoor = [-2.548926, 118.0148634]; // Koordinat pusat Indonesia
const jakartaCoor = [-6.2088, 106.8456];       // Koordinat Jakarta

// Menambahkan marker di Jakarta
var marker = L.marker(jakartaCoor).addTo(map);
marker.bindPopup("<b>Jakarta</b><br>Ibu Kota Indonesia.").openPopup();

// Menambahkan lingkaran di Jakarta
var circle = L.circle(jakartaCoor, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500 // Radius dalam meter
}).addTo(map);
circle.bindPopup("Area di sekitar Jakarta.");

// Menambahkan marker di Pusat Indonesia
var indonesiaMarker = L.marker(indonesiaCoor).addTo(map);
indonesiaMarker.bindPopup("<b>Pusat Indonesia</b><br>Koordinat geografis.").openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);