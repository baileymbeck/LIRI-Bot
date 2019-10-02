var axios = require("axios");
var fs = require("fs");


// -------- Find Concert API ----------
function findConcert(artist){
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(url).then(
        function(response){
            // console.log(response.data);
            for(i in response.data){
                console.log("Venue: " + response.data[i].venue.name);
                console.log("City: " + response.data[i].venue.city);
                console.log("Region: " + response.data[i].venue.region);
                console.log("Country: " + response.data[i].venue.country);
                console.log("Event Date: " + response.data[i].datetime);
                console.log("Ticket Sale Start: " + response.data[i].on_sale_datetime);
                console.log("\n---------------------------\n");
            }
        },
    
        function(error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          }
    );
}

// -------- Spotify API ----------

// client ID = e744f974be4849faa28adb4393d15f52
// client secret = e8380511aaf74f8ba5e344eee84bf04a


// already downloaded package but spotify is a labrinth


// * This will show the following information about the song in your terminal/bash window

// * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// function spotifyID(song){
//     var url = "http://open.spotify.com/" + song + 
// };


// -------- Movie API ---------- still need rotten tomatoes rating
function findMovie(movieName){
    var url = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(url).then(
        function(response){
            // console.log(response.data);
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMBD Rating: " + response.data.imdbRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("\n---------------------------\n");
        
        },
    
        function(error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          }
    );
}


function doSomething(){
    fs.readFile("random.txt", "utf8", function(err, data){
        console.log(data);
        var dataParts = data.split(",");
        if(dataParts.length === 2){
            console.log(dataParts[0]);
            console.log(dataParts[1]);
            commandProcess(dataParts[0], dataParts[1]);
        }
    })
}

function commandProcess(command, value){
    switch(command){
        case "concert-this":
            findConcert(value);
            break;
        
        case "spotify-this-song":
            spotifyID(value);
            break;
        case "movie-this":
            findMovie(value);
            break;
        case "do-what-it-says":
            doSomething();
            break;
        default:
            console.log("unknown command");
    }
}

var action = process.argv[2];
var value = process.argv[3];

commandProcess(action, value);