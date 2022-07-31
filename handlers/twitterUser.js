const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require('body-parser');
const { 
  parseTwitterService,
  addTwitterUserService
} = require('../services/twitter.service');
const {
  requestValidator,
  requestBodyValidator
} = require('../middleware/requestValidator');
require('../models');

const app = express();

app.use(bodyParser.json())

app.get('/twitter/:username', requestValidator, async (req, res) => {
  try {
    const responseFromTwitter = await parseTwitterService(req.params.username);
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

app.post('/twitter', requestBodyValidator, async (req, res) => {
  try {
    await addTwitterUserService(req.body);
    return res.status(201).send({
      message: 'User created',
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
});

module.exports.handler = serverless(app);
