const mongoose = require("mongoose");
const Post = require("./models/post");

mongoose.connect("mongodb://127.0.0.1/nodeblog_test_db");
/*
Post.find({})
	.then((post) => {
		console.log(post);
	})
	.catch((error) => {
		console.log(error);
	});
*/
/*
Post.findById("64e5ea1776b514727e6f6797")
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});
	*/
/*
Post.findByIdAndDelete("64e5ea1776b514727e6f6797")
	.then((result) => {
		console.log(result, "deleted");
	})
	.catch((err) => {
		console.log(err);
	});
*/
/*
Post.findByIdAndUpdate("64e5e61b6f5c925c827c0828", {
	title: "sezen aksu",
	content: "zalim",
})
	.then((result) => {
		console.log(result, "updated");
	})
	.catch((err) => {
		console.log(err);
	});
*/
/*
Post.find({
	content: "zalim",
}).then((result) => {
	console.log(result);
});
*/
/*
Post.create({
	title: "anderson",
	content: "talisca",
})
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.log(error);
	});
*/
