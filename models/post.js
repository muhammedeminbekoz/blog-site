const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
	title: { type: String },
	author: { type: Schema.Types.ObjectId, ref: "users" },
	content: { type: String },
	date: { type: Date, default: Date.now },
	category: { type: Schema.Types.ObjectId, ref: "categories" },
	post_image: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
