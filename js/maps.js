// crear un objeto mapa
var map = L.map("map").setView([-10.102853, -75.260435], 6);

// MAPAS BASE

// mapa base openstreetmap
var osm = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map); 

// google street map
var GoogleStreet = L.tileLayer(
  "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
).addTo(map);

// google satellite map
var GoogleSatellite = L.tileLayer(
  "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
).addTo(map);

// mapa base carto gris
// var CartoGrey = L.tileLayer(
//   "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
// ).addTo(map);

// mapa base carto oscuro
// var CartoDark = L.tileLayer(
//   "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
// ).addTo(map);

// relieve esri
// var EsriRelief = L.tileLayer(
//   "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
// ).addTo(map);

// national geographic
// var EsriNatGeo = L.tileLayer(
//   "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
// ).addTo(map);

// ELEMENTOS VECTORIALES
var RestosArqueologicos = L.geoJSON(restos);
var RedHidrica = L.geoJSON(RedHidrica);
var departamentos = L.geoJSON(departamentos);

// AGREGAR DICCIONARIO DE MAPAS BASE
var baseMaps = {
  "Desactivar mapas": L.layerGroup([]),
  "OpenStreetMap": osm,
  "Google Street": GoogleStreet,
  "Google Satelite": GoogleSatellite
  // "Carto Gris": CartoGrey,
  // "Carto Oscuro": CartoDark,
  // "Esri Relieve": EsriRelief,
  // "Esri National Geographic": EsriNatGeo
};

// AGREGAR DICCIONARIO DE CAPAS VECTORIALES
var layers = {
  "Restos Arqueológicos": RestosArqueologicos,
  "Red Hidrica": RedHidrica,
  "Departamentos": departamentos
};

// AGREGAR CONTROLES DE CAPAS
L.control.layers(baseMaps, layers).addTo(map);