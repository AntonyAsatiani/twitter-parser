const axios = require('axios');
const {
  twitterApiBearerToken,
  twitterApiUrl,
} = require('../config');
const User = require('../models/user.model');

const parseTwitterService = async (username) => {
    const { data } = await axios.get(`${twitterApiUrl}/users/by/username/${username}`, {
      headers: {
        "Authorization": `Bearer ${twitterApiBearerToken}`,
      },
    });    
    return data;

};

const addUserService = async (body) => {
  const user = new User({
    'twitterId': body.twitterId,
    'name': body.name,
    'username': body.username,
  });
  await user.save();
};

module.exports = {
  parseTwitterService,
  addUserService
};
