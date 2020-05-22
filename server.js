const express = require("express");

let PORT = process.env.PORT || 6900;

let app = express();

app.use(express.static("public/"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("views", "./views");
app.set("view engine", "handlebars");

const router = require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, () => {
  console.log(`App now listening at http://localhost:${PORT}`);
});
