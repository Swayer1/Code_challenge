const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const sitesRoutes = require("./routes/sites");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", homeRoutes);
app.use("/api/sites", sitesRoutes);

module.exports = app;
