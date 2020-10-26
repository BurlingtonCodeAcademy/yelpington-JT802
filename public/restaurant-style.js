//specific Leaflet map stuff
let myMap = L.map("map-container").setView([44.475833, -73.211944], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 20,
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

//fetches the relevant page (by restaurant name) from the server
let restaurantPage = document.location.pathname.split("/").splice(-1);
fetch("/api/" + restaurantPage)
	.then((response) => response.json())
	.then(fillInfo);

//helper function for bringing in the individual restaurant info
//Thank you, Bob, for helping me nail down clicking on markers to redirect
function fillInfo(info) {
	document.getElementById("name").textContent = info.name;
	document.getElementById("address").textContent = info.address;
	document.getElementById("phone-number").textContent = info.phone;
	document.getElementById("hours").textContent = info.hours;
	document.getElementById("noteCard").textContent = info.notes;

	//drops an individual restaurant marker onto the map when the restaurant page loads
	let latLong = [info.lat, info.long];
	L.marker(latLong).addTo(myMap).bindTooltip(`<h5>${info.name}</h5>`);

	//this should center and zoom in the map on the restaurant marker for the restaurant page
	myMap.setView(latLong, 18);
}
