const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
	title: { type: String },
	content: { type: String },
	date: { type: Date, default: Date.now },
	category_name: { type: String },
	post_image: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
