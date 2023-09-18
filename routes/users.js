const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
	res.render("site/register");
});

router.post("/register", (req, res) => {
	User.create(req.body).then(() => {
		console.log(req.body.username);
		res.redirect("/login");
	});
});

router.get("/login", (req, res) => {
	res.render("site/login");
});

router.post("/login", (req, res) => {
	const { email, password } = req.body;

	User.findOne({ email })
		.then((user) => {
			if (user) {
				if (user.password == password) {
					res.redirect("/");
				} else {
					res.redirect("/users/login");
				}
			} else {
				{
					res.redirect("/users/register");
				}
			}
		})
		.catch((err) => {
			console.log("hata");
		});
});

module.exports = router;
