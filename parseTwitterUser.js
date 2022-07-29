const serverless = require("serverless-http");
const express = require("express");
const app = express();
const parseTwitterService = require('./services/twitter.service');
const requestValidator = require('./middleware/requestValidator');

app.get('/twitter', requestValidator, async (req, res) => {
  try {
    const responseFromTwitter = await parseTwitterService(req.query.username);
    if (responseFromTwitter.errors) {
      return res.status(404).send({
        error: 'Resource Not Found',
        message: responseFromTwitter.errors[0].detail,
        status: '404',
      });
    }
    return res.status(200).send({
      ...responseFromTwitter,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }

});


module.exports.handler = serverless(app);
