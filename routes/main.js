const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Category = require("../models/Category");
const User = require("../models/User");
const session = require("express-session");

router.get("/", (req, res) => {
	console.log(req.session);
	res.render("site/index");
});
router.get("/blog", (req, res) => {
	Post.find({})
		.populate({ path: "author", model: User })
		.sort({ $natural: -1 })
		.then((posts) => {
			Category.find({}).then((categories) => {
				res.render("site/blog", { posts: posts, categories: categories });
			});
		});
});
router.get("/contact", (req, res) => {
	res.render("site/contact");
});

router.post("/main/contact", (req, res) => {
	res.redirect("/");
});

module.exports = router;
