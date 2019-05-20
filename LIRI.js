require("dotenv").config({path:'.env'})


var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var require = ('twitter');

var spotify = new Spotify(keys.spotify);

var input  = process.argv;
var command = input[2]
    console.log(input[2]);

var name = "";
for (i = 2; i < input.length; i++) {
    name = name + " " + input[i];
}

name = name.trim().replace(" ", "+");
// console.log(name);
//console.log(nodeArgs.length);
{if (command === "my-tweets") {
	    		
	var params = {screen_name: 'bracewell_sara', limit: 20};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	// console.log(response, null, 2);
	    for (var i = tweets.length - 1; i >= 0; i--) {
	    	var myTweets = 
	    		"+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" + "\r\n" + "\r\n" +
	    		"Tweet Number: " + (tweets.length-i) + "\r\n" +
	    		"Posted on: " + tweets[i].created_at + "\r\n" +
	    		"Tweet Posted: " + tweets[i].text + "\r\n" + "\r\n" + "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
	    	console.log(myTweets);
	    	writeToLog(myTweets);
			} 
		}
	})
}

else if (command === "spotify-this-song") {
	if (name === "") {
  		name = "Roundabout"
  	}
	//same song info as above but looking at info for "The Sign" by Ace of Base.
	spotify.search({ type: 'track', query: name, limit: 6 }, function(err, data) {
 	if (err) {
    	return console.log('Error occurred: ' + err);
  	}
  	
  	// console.log(JSON.stringify(data, null, 2));
  	// console.log(data);
  	var track = data.tracks.items[5];
    var mySong =
		"-----------------------------------------------------------------------" + "\r\n" +
		"Song Title: " + name + "\r\n" +
		"Artist: " + track.artists[0].name + "\r\n" +
		"Album: " + track.album.name + "\r\n" + 
		"Preview Link: " + track.preview_url + "\r\n" +
		"-----------------------------------------------------------------------" + "\r\n"
		console.log(mySong);
		writeToLog(mySong);
	})

 }
}
