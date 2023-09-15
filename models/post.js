const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	title: { type: String },
	content: { type: String },
	date: { type: Date, default: Date.now },
	post_image: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
