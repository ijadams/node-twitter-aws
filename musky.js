require('dotenv').load();

var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
console.log(process.cwd(), '.env');
console.log(process.env.TWITTER_CONSUMER_KEY);

var params = {screen_name: 'elonmusk'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var json = JSON.stringify(tweets);
    fs.writeFile('musky.json', json, 'utf8', function() {});
  } else {
    console.log(error);
  }
});
