const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
	res.render("site/register");
	User.find({}).then((result) => {
		console.log(result);
	});
});

router.post("/register", (req, res) => {
	User.create(req.body).then(() => {
		console.log(req.body.username);
		res.redirect("/login");
	});
});

module.exports = router;
