var http = require('http');
var fs = require('fs');
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;


var weatherAsEnglish = "";

//We are going to issue a "get" request from the server. Go to weatherURL and when you get back, call whatever you get "theResponse" and run the following code.
var request = http.get(weatherUrl, (theResponse)=>{
	console.log(theResponse.statusCode);//prints 200 b/c that's the status code it got back from theResponse

	//Create a listener for as data comes through through this HTTP get request
	//we're using node to get the statusCode from theResponse
	theResponse.on('data', (chunkofData)=>{
		// console.log(chunkofData);
		weatherAsEnglish += chunkofData;
		// console.log(weatherAsEnglish);
	});
	//this is an end listener. Run this code when you're done building the data:
	theResponse.on('end', ()=>{
		console.log(weatherAsEnglish);
	})
});


// Lab work after class: Put weather data in a web page for browser to display.

function renderHomePage(req, res){
		//writeHead takes a status code (200) and type of data you have
	res.writeHead(200,{'content-type':'text/html'});

	//This displays a mess of data. Need to put this into a webpage. renderHomePage by making an html file and putting this into a function
	// res.end("<p>" +weatherAsEnglish+ "</p>");

	//Just res.writeHead will not send data. Need FS to read and send data. readFileSync() reads all files in the "file" synchronously
	var renderHomePageHTML = fs.readFileSync('renderHomePage.html');
	res.end(renderHomePage);
};

var server = http.createServer((req,res)=>{
	//Use if/else statement to indicate what happens with successful/unsuccessful requests

	if (req.url === '/'){
		renderHomePage();
	}else{
		res.writeHead(404,{'content-type':'text/html'});
		res.end("<h1>Sorry, the page you requested is unavailable.</h1>");
	}
});

//Set port to listen to for changes
var port = 8000;
server.listen(port);