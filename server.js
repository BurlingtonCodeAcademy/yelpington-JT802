// import the important bits
const express = require("express");
const path = require("path");
const app = express();

// providing port options
const port = process.env.PORT || 8000;

// here's some middleware for our home audience
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// A single route for the homepage
app.get("/", (request, response) => {
	response.sendFile(path.resolve("./public/index.html"));
});

// route for showing list of all restaurant ids in JSON format
app.get("/api", (request, response) => {
	response.sendFile(path.resolve("./api/restaurants.json"));
});

// route for showing a single restaurant by id in JSON format
app.get("/api/:id", (request, response) => {
	let id = request.params.id;
	response.sendFile(path.resolve(`./api/${id}.json`));
});

// Click on a nav link *or* marker to display that restaurant's specific page
app.get("/public/:restId", (request, response) => {
	let restId = request.params.restId;
	response.sendFile(path.resolve("./public/oneRestaurant.html"));
});

// Where the port is listening
app.listen(port, () => {
	console.log("App is listening on port: " + port);
});
