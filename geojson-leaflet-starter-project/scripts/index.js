// import { dicoding, landmark, streets, trainStops, zoo } from './geojson.js';


// // Initialize map
// const indonesiaCoor = [-2.548926, 118.0148634];
// const myMap = L.map('map', {
//   zoom: 5,
//   center: indonesiaCoor,
//   scrollWheelZoom: false,
// });

// // Set base map
// const osmTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
// const baseTile = L.tileLayer(osmTileUrl, {
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// });
// baseTile.addTo(myMap);



// function onEachFeature(feature, layer) {
//   let popupContent = `
//     <p>Tipe geometri: ${feature.geometry ? feature.geometry.type : feature.type}</p>
//   `;
//   if (feature.properties && feature.properties.popupContent) {
//     popupContent += feature.properties.popupContent;
//   }
//   layer.bindPopup(popupContent);
// }
 


// const dicodingLayer = L.geoJSON(dicoding,{
//   onEachFeature
// });
// dicodingLayer.addTo(myMap);
// const landmarkLayer = L.geoJSON(landmark,{
//   onEachFeature
// });
// landmarkLayer.addTo(myMap);
// const trainStopsLayer = L.geoJSON(trainStops,{
//   onEachFeature
// });
// trainStopsLayer.addTo(myMap);
//  const streetsLayer = L.geoJSON(streets,{
//   style:{
//     color:'#FF4500',
//     weight:4,
//     opacity:1
//   },
//   filter(feature){
//     if(feature.properties){
//       // if under cunstruction
//       return !feature.properties.underConstruction;
//     }
//     return false
//   }
// });
// streetsLayer.addTo(myMap);
// const zooLayer = L.geoJSON([zoo],{
//   style(feature){
//     if (feature.properties){
//       return feature.properties.style;
//     }
//     return null
//   }
// });
// zooLayer.addTo(myMap);


// const featuresGroup = L.featureGroup([
//   dicodingLayer,
//   landmarkLayer,
//   trainStopsLayer,
//   streetsLayer,
//   zooLayer,
// ]);
// myMap.fitBounds(featuresGroup.getBounds());



// code by qwen

import { dicoding, landmark, streets, trainStops, zoo } from './geojson.js';

// Initialize map
const indonesiaCoor = [-2.548926, 118.0148634];
const myMap = L.map('map', {
  zoom: 5,
  center: indonesiaCoor,
  scrollWheelZoom: false,
});

// Set base map
const osmTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseTile = L.tileLayer(osmTileUrl, {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
baseTile.addTo(myMap);

/**
 * Function to handle popup content for each feature
 */
function onEachFeature(feature, layer) {
  let popupContent = `
    <p>Tipe geometri: ${feature.geometry ? feature.geometry.type : 'Tidak tersedia'}</p>
  `;
  if (feature.properties && feature.properties.popupContent) {
    popupContent += `<p>${feature.properties.popupContent}</p>`;
  }
  layer.bindPopup(popupContent);
}

/**
 * Add layers to the map
 */
const layers = [
  L.geoJSON(dicoding, { onEachFeature }),
  L.geoJSON(landmark, { onEachFeature }),
  L.geoJSON(trainStops, { onEachFeature }),
  L.geoJSON(streets, {
    style: {
      color: '#FF4500',
      weight: 4,
      opacity: 1,
    },
    filter: (feature) => {
      // Only include features that are not under construction
      return feature.properties && !feature.properties.underConstruction;
    },
  }),
  L.geoJSON(zoo, {
    style: (feature) => {
      // Apply custom styles from properties if available
      return feature.properties && feature.properties.style
        ? feature.properties.style
        : { color: '#000', weight: 2, opacity: 1 };
    },
  }),
];

// Add all layers to the map
layers.forEach((layer) => layer.addTo(myMap));

/**
 * Fit map bounds to include all features
 */
const featuresGroup = L.featureGroup(layers);
myMap.fitBounds(featuresGroup.getBounds());


// Mendapatkan lokasi sekali
navigator.geolocation.getCurrentPosition(
  (position) => {
    // Handle posisi saat ini
    const { latitude, longitude } = position.coords;
    doSomething(latitude, longitude);
  },
  (error) => {
    // Handle error jika geolokasi gagal
    console.error('Error getting current position:', error.message);
    alert(`Gagal mendapatkan lokasi: ${error.message}`);
  }
);

// Memantau lokasi secara real-time
let watchID = null;

watchID = navigator.geolocation.watchPosition(
  (position) => {
    // Handle posisi yang diperbarui
    const { latitude, longitude } = position.coords;
    doSomething(latitude, longitude);
  },
  (error) => {
    // Handle error jika pemantauan lokasi gagal
    console.error('Error watching position:', error.message);
    alert(`Pemantauan lokasi gagal: ${error.message}`);

    // Hentikan pemantauan jika terjadi error
    if (watchID !== null) {
      navigator.geolocation.clearWatch(watchID);
      watchID = null;
    }
  },
  {
    // Opsi tambahan untuk watchPosition
    enableHighAccuracy: true, // Aktifkan akurasi tinggi
    timeout: 5000, // Waktu tunggu maksimal (ms)
    maximumAge: 0, // Data lokasi harus selalu baru
  }
);

// Menghentikan pemantauan lokasi saat tidak diperlukan lagi
function stopWatching() {
  if (watchID !== null) {
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
    console.log('Pemantauan lokasi dihentikan.');
  }
}

// Contoh fungsi untuk menangani data lokasi
function doSomething(latitude, longitude) {
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // Tambahkan logika lain sesuai kebutuhan, misalnya:
  // - Menampilkan marker di peta
  // - Mengirim data ke server
}