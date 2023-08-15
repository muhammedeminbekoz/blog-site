/*
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
	const indexPage = fs.readFileSync("index.html");
	const aboutPage = fs.readFileSync("about.html");
	const contactPage = fs.readFileSync("contact.html");

	if (req.url == "/") {
		return res.end(indexPage);
	} else if (req.url == "/about") {
		return res.end(aboutPage);
	} else if (req.url == "/contact") {
		return res.end(contactPage);
	} else {
		res.statusCode = 404;
		res.end("Sayfa Bulunamiyor");
	}
});

server.listen(port, hostname, () => {
	console.log(`sever is working, http://${hostname}:${port}/`);
});
*/

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
	res.sendFile(path.resolve(__dirname, "about.html"));
});
app.get("/contact", (req, res) => {
	res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.get("/test", (req, res) => {
	res.sendFile(path.resolve(__dirname, "contact.html"));
});
/*
app.get("/users/:userID/movies/:moviesID", (req, res) => {
	res.send(`<h1>   user name : ${req.params.userID} </h1>
    <h1> movies name: ${req.params.moviesID}</h1>`);
});
*/
app.listen(port, hostname, () => {
	console.log(`Example app listening on port http://${hostname}:${port} `);
});
