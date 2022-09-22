const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Vehicle = new Schema({
	picture: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Vehicle", Vehicle);
