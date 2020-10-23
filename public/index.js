// This establishes the beginning map of Burlington //
let myMap = L.map("map-container").setView([44.475833, -73.211944], 15);

// Uses an established map tileset from http://leaflet-extras.github.io/leaflet-providers/preview/ (where we grabbed one from in class) //
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(myMap);

// ------ Ten-Pin set for center Burlington & nine total restaurants ------ //
// base pin around the center of Burlington
let zeroMark = L.marker([44.475833, -73.211944]).addTo(myMap);
//first pin at A Single Pebble ([need lat, long])
let firstMark = L.marker([]).addTo(myMap);
// second pin at Halversons ([need lat, long])
let secondMark = L.marker([]).addTo(myMap);
// third pin at The Skinny Pancake ([need lat, long])
let thirdMark = L.marker([]).addTo(myMap);
// fourth pin at McDonalds ([need lat, long])
let fourthMark = L.marker([]).addTo(myMap);
// fifth pin at Leunigs ([need lat, long])
let fifthMark = L.marker([]).addTo(myMap);
// sixth pin at FuDa ([need lat, long])
let sixthMark = L.marker([]);
// seventth pin at El Cortio ([need lat, long])
let seventhMark = L.marker([]);
// eighth pin at Vermont Pub & Brewery ([need lat, long])
let eighthMark = L.marker([]);
// nine pin at Koto ([need lat, long])
let ninthMark = L.marker([]);

// ------ Binds pop-ups to each pin location ------ //
// same order as in pin set above
zeroMark.bindPopup('<h5>Welcome to Burlington!</h5>');
firstMark.bindPopup('<h5>A Single Pebble</h5>');
secondMark.bindPopup('<h5>Halversons');
thirdMark.bindPopup('<h5>The Skinny Pancake</h5>');
fourthMark.bindPopup('<h5>McDonalds</h5>');
fifthMark.bindPopup('<h5>Leunigs Bistro</h5>');
sixthMark.bindPopup('<h5>FuDa</h5>');
seventhMark.bindPopup('<h5>El Cortio</h5>');
eighthMark.bindPopup('<h5>Vermont Pub & Brewery</h5>');
ninthMark.bindPopup('<h5>Koto Japanese Steakhouse</h5>');

// function for clipping the hash out of the URL
let name = document.location.hash.slice(1)