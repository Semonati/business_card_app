const express = require("express");
const chalk = require("chalk");
const config = require("config");

const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const connectToDb = require("./DB/dbService");
const app = express();
const { handleError } = require("./utils/handleErrors");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
  localStorage.setItem("user", "local");
});

const PORT = config.get("PORT");
app.listen(PORT, () => {
  chalk.blueBright(`Listening on: http://localhost:${PORT}`);
  connectToDb();
});
