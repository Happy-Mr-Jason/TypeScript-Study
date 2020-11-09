import express = require("express");
import bodyParser = require("body-parser");
import morgan = require("morgan");

var app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("../"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(require("./router"));
app.use(errorHandler);

app.listen(3000);

function errorHandler(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.error(err);
  res.status(500).send(err.message);
}
