//const path = require("path");
//const express = require("express");
import path from "path";
import express from "express";
import { engine } from "express-handlebars";
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

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

app.listen(port, hostname, () => {
	console.log(`Example app listening on port http://${hostname}:${port} `);
});
