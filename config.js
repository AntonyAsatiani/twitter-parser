const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  twitterApiKey: process.env.TWITTER_API_KEY,
  twitterApiSecret: process.env.TWITTER_API_SECRET,
  twitterApiBearerToken: process.env.TWITTER_API_BEARER_TOKEN,
  twitterApiUrl: process.env.TWITTER_API_URL,
};
