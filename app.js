const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const fileUpload = require("express-fileupload");
const moment = require("moment");
const handlebars = exphbs.create({
	helpers: {
		generateDate: (date, format) => moment(date).format(format),
	},
});

mongoose.connect(`mongodb://${process.env.HOSTNAME}/${process.env.DATABASE_NAME}`);

app.use(fileUpload());
app.use(express.static("public"));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const myMiddleware = (req, res, next) => {
	next();
};

app.use("/", myMiddleware);

const main = require("./routes/main");
const posts = require("./routes/posts");
const users = require("./routes/users");
app.use("/", main);
app.use("/posts", posts);
app.use("/users", users);

app.listen(port, process.env.HOSTNAME, () => {
	console.log(`Example app listening on port http://${process.env.HOSTNAME}:${port} `);
});
