// This establishes the beginning map of Burlington //
let myMap = L.map("map-container").setView([44.475833, -73.211944], 15);

// Uses an established map tileset from http://leaflet-extras.github.io/leaflet-providers/preview/ (where we grabbed one from in class) //
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// ------ Nine-Pin set for center Burlington & eight total restaurants ------ //
// base pin around the center of Burlington
let zeroMark = L.marker([44.476025, -73.211034]).addTo(myMap);
//first pin at A Single Pebble ([need lat, long])
let firstMark = L.marker([44.478132, -73.214573]).addTo(myMap);
// second pin at Halversons ([need lat, long])
let secondMark = L.marker([44.479993, -73.212702]).addTo(myMap);
// third pin at The Skinny Pancake ([need lat, long])
let thirdMark = L.marker([44.477484, -73.220032]).addTo(myMap);
// fourth pin at Shy Guy Gelato ([need lat, long])
let fourthMark = L.marker([44.46745, -73.209846]).addTo(myMap);
// fifth pin at Leonardo's Pizza ([need lat, long])
let fifthMark = L.marker([44.480358, -73.215544]).addTo(myMap);
// sixth pin at El Cortio ([need lat, long])
let sixthMark = L.marker([44.478233, -73.211998]).addTo(myMap);
// seventh pin at Vermont Pub & Brewery ([need lat, long])
let seventhMark = L.marker([44.477184, -73.214125]).addTo(myMap);
// eighth pin at Speeder & Earls ([need lat, long])
let eighthMark = L.marker([44.467868, -73.215032]).addTo(myMap);

// ------ Binds pop-ups to each pin location ------ //
// same order as in pin set above
zeroMark.bindPopup("<h5>Welcome to Burlington!</h5>");
firstMark.bindPopup("<h5>A Single Pebble</h5>");
secondMark.bindPopup("<h5>Halversons");
thirdMark.bindPopup("<h5>The Skinny Pancake</h5>");
fourthMark.bindPopup("<h5>Shy Guy Gelato</h5>");
fifthMark.bindPopup("<h5>Leonardo's Pizza</h5>");
sixthMark.bindPopup("<h5>El Cortio</h5>");
seventhMark.bindPopup("<h5>Vermont Pub & Brewery</h5>");
eighthMark.bindPopup("<h5>Speeder & Earls</h5>");

// function for clipping the hash out of the URL
//let name = document.location.hash.slice(1)
