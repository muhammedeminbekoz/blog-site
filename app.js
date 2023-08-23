//const path = require("path");
//const express = require("express");

const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const handlebars = exphbs.create({});

mongoose.connect(`mongodb://${process.env.HOSTNAME}/${process.env.DATABASE_NAME}`);
app.use(express.static("public"));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
	res.render("site/index");
});
app.get("/about", (req, res) => {
	res.render("site/about");
});

app.get("/blog", (req, res) => {
	res.render("site/blog");
});
app.get("/contact", (req, res) => {
	res.render("site/contact");
});

app.get("/login", (req, res) => {
	res.render("site/login");
});

app.get("/register", (req, res) => {
	res.render("site/register");
});

app.listen(port, process.env.HOSTNAME, () => {
	console.log(`Example app listening on port http://${process.env.HOSTNAME}:${port} `);
});
