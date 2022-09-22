// Imported required packages
const express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	cors = require("cors"),
	mongoose = require("mongoose");

// MongoDB Databse url
var mongoDatabase = "mongodb://localhost:27017/vehicleShop";

// Created express server
const app = express();

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
	() => {
		console.log("Database is connected");
	},
	(err) => {
		console.log("There is problem while connecting database " + err);
	}
);

// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

const Model = require("./Vehicle");

app.get("/read", async (req, res) => {
	Model.find({}, (err, result) => {
		if (err) {
			res.send("something went wrong");
		}
		res.send(result);
	});
});

// Setup for the server port number
const port = process.env.PORT || 4000;

// Staring our express server
const server = app.listen(port, function () {
	console.log("Server Lisening On Port : " + port);
});
