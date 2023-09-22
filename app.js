const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const fileUpload = require("express-fileupload");
const moment = require("moment");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const handlebars = exphbs.create({
	helpers: {
		generateDate: (date, format) => moment(date).format(format),
	},
});

mongoose.connect(`mongodb://${process.env.HOSTNAME}/${process.env.DATABASE_NAME}`);

app.use(fileUpload());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(
	expressSession({
		secret: "test",
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({
			mongoUrl: `mongodb://${process.env.HOSTNAME}/${process.env.DATABASE_NAME}`,
		}),
	})
);

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Display link middleware

app.use((req, res, next) => {
	const { userId } = req.session;
	if (userId) {
		res.locals = {
			diplayLink: true,
		};
	} else {
		res.locals = {
			displayLink: false,
		};
	}
	next();
});

const main = require("./routes/main");
const posts = require("./routes/posts");
const users = require("./routes/users");
const session = require("express-session");
const admin = require("./routes/admin/index");
app.use("/", main);
app.use("/posts", posts);
app.use("/users", users);
app.use("/admin", admin);
app.listen(port, process.env.HOSTNAME, () => {
	console.log(`Example app listening on port http://${process.env.HOSTNAME}:${port} `);
});
