const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const handlebars = exphbs.create({});

mongoose.connect(`mongodb://${process.env.HOSTNAME}/${process.env.DATABASE_NAME}`);

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const main = require("./routes/main");
const posts = require("./routes/posts");
app.use("/", main);
app.use("/posts", posts);

app.listen(port, process.env.HOSTNAME, () => {
	console.log(`Example app listening on port http://${process.env.HOSTNAME}:${port} `);
});
