const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");

router.get("/", (req, res) => {
	res.render("admin/index");
});
router.get("/categories", (req, res) => {
	Category.find({}).then((categories) => {
		res.render("admin/categories", { categories: categories });
	});
});

router.post("/categories", (req, res) => {
	Category.create(req.body);
	res.render("categories");
});

module.exports = router;
