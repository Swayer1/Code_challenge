const axios = require("axios");

const baseUrl =
  process.env.REACT_APP_API_URL ||
  "http://renewables-codechallenge.azurewebsites.net/api";

const httpService = {
  get: (endpoint) => axios.get(baseUrl + endpoint),
};

module.export = httpService;
