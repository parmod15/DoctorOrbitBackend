const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server-config");

const apiRoutes = require("./routes/index");

const app = express();

const setupAndStartServer = () => {
  app.use(cors());

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at port: ${PORT}`);
  });
};

setupAndStartServer();
