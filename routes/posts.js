const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const path = require("path");
const User = require("../models/User");
const Category = require("../models/Category");

router.get("/new", (req, res) => {
	Category.find({}).then((categories) => {
		res.render("site/addpost", { categories: categories });
	});
});
router.get("/:id", (req, res) => {
	Post.findById({ _id: req.params.id })
		.populate({ path: "author", model: User })
		.then((post) => {
			Post.find({}).then((posts) => {
				Category.find({}).then((categories) => {
					res.render("site/post", { post: post, posts: posts, categories: categories });
				});
			});
		});
});

router.post("/test", (req, res) => {
	let post_image = req.files.post_image;
	post_image.mv(path.resolve(__dirname, "../public/img/postimages", post_image.name));

	Post.create({
		...req.body,
		post_image: `/img/postimages/${post_image.name}`,
		author: req.session.userId,
	});

	console.log(req.files.post_image.name);
	res.redirect("/blog");
});

module.exports = router;
