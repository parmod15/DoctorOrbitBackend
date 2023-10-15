const bodyParser = require("body-parser");
const express = require("express");

const { PORT } = require("./src/config/server-config");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`server started at port: ${PORT}`);
  });
};

setupAndStartServer();
