const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const session = require("express-session");

router.get("/", (req, res) => {
	console.log(req.session);
	res.render("site/index");
});
router.get("/blog", (req, res) => {
	Post.find({}).then((posts) => {
		res.render("site/blog", { posts: posts });
	});
});
router.get("/contact", (req, res) => {
	res.render("site/contact");
});

module.exports = router;
