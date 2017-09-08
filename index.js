console.log(`bot`)

var Twit = require("twit");

let config = require('./config.js');
let T = new Twit(config)

let botConfig = require('.botConfig.js');
let Tw = Twit(botConfig);




let stream = T.stream('user');
stream.on('follow', followed);

function followed(event){
  let name = event.source.name;
  let screenName = event.source.screen_name;
  tweetIt(`@${screenName} thank you for the follow.`)
  console.log(`followed`);
}





function tweetIt(txt) {

let tweet = {
	status: txt
	}
	T.post('statuses/update', tweet, tweeted);
	
	function tweeted(err, data, response) {
		if (err) {
			console.log(`Error ${err}`)
		} else {
			console.log(`Worked ${data}`)
		}
	}
}

