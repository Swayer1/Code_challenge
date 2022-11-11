const express = require("express");
const site = require("../models/site");
const httpService = require("../services/httpService");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(httpService);
  // const sites = await httpService.get("./sites");
  // res.send("sites");
});

module.exports = router;
