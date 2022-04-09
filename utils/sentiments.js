const axios = require("axios");
require("dotenv").config();

module.exports.getSentiments = (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("text", text);

  const options = {
    method: "POST",
    url: "https://text-sentiment.p.rapidapi.com/analyze",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "text-sentiment.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.RAPIDKEY,
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
