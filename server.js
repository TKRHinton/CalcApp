let express = require("express");
let routes = require("./routes");

let app = express();

app.get("/flip", routes.coinFlipRoute);
app.get("/sum", routes.sumNumbers)

module.exports.app = app;

