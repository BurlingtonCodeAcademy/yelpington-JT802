// This establishes the beginning map of Burlington //
let myMap = L.map("map-container").setView([44.475833, -73.211944], 15);

// Uses an established map tileset from http://leaflet-extras.github.io/leaflet-providers/preview/ (where we grabbed one from in class) //
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 20,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// ------ Nine-marker set for center Burlington & eight total restaurants ------ //

// base marker nearish the center of Burlington
let zeroMark = L.marker([44.476025, -73.211034])
	.addTo(myMap)
	.bindTooltip("<h5>Welcome to Burlington!</h5>");

// ------ Click a restaurant marker to go to the specific restaurant page ------ //

//first marker at A Single Pebble
let firstMark = L.marker([44.478132, -73.214573])
	.addTo(myMap)
	.bindTooltip("<h5>A Single Pebble</h5>")
	.on("click", () => {
		window.location = "/public/single-pebble";
	});

// second marker at Halversons
let secondMark = L.marker([44.479993, -73.212702])
	.addTo(myMap)
	.bindTooltip("<h5>Halversons")
	.on("click", () => {
		window.location = "/public/halversons";
	});

// third marker at The Skinny Pancake
let thirdMark = L.marker([44.477484, -73.220032])
	.addTo(myMap)
	.bindTooltip("<h5>The Skinny Pancake</h5>")
	.on("click", () => {
		window.location = "/public/skinny-pancake";
	});

// fourth marker at Shy Guy Gelato
let fourthMark = L.marker([44.46745, -73.209846])
	.addTo(myMap)
	.bindTooltip("<h5>Shy Guy Gelato</h5>")
	.on("click", () => {
		window.location = "/public/shy-guy";
	});

// fifth marker at Leonardo's Pizza
let fifthMark = L.marker([44.480358, -73.215544])
	.addTo(myMap)
	.bindTooltip("<h5>Leonardo's Pizza</h5>")
	.on("click", () => {
		window.location = "/public/leonardos";
	});

// sixth marker at El Cortio
let sixthMark = L.marker([44.478233, -73.211998])
	.addTo(myMap)
	.bindTooltip("<h5>El Cortio</h5>")
	.on("click", () => {
		window.location = "/public/el-cortio";
	});

// seventh marker at Vermont Pub & Brewery
let seventhMark = L.marker([44.477184, -73.214125])
	.addTo(myMap)
	.bindTooltip("<h5>Vermont Pub & Brewery</h5>")
	.on("click", () => {
		window.location = "/public/vermont-pub-brewery";
	});

// eighth marker at Speeder & Earls
let eighthMark = L.marker([44.467868, -73.215032])
	.addTo(myMap)
	.bindTooltip("<h5>Speeder & Earls</h5>")
	.on("click", () => {
		window.location = "/public/speeder-earls";
	});
