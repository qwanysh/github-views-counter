const express = require("express");
const { indexHandler, viewsHandler } = require("./handlers");
const { PORT } = require("./config");
const { redisClient } = require("./utils");

const app = express();

app.get("/", indexHandler);
app.get("/:username", viewsHandler);

redisClient.connect().then(() => {
  app.listen(PORT);
});
