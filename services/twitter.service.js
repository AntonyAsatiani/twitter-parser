const axios = require('axios');
const {
  twitterApiBearerToken,
  twitterApiUrl,
} = require('../config');

const parseTwitterService = async (username) => {
    const { data } = await axios.get(`${twitterApiUrl}/users/by/username/${username}`, {
      headers: {
        "Authorization": `Bearer ${twitterApiBearerToken}`,
      },
    });    
    return data;

};

module.exports = parseTwitterService;
