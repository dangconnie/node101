//We are getting a node module called "http"
//node server.js on cmd line
var http = require("http");
// console.log(http);

//CreateServer requires callback that it's supposed to run
//Nodejs runs JS. We need to tell NodeJS to listen to this server so it knows what to do. What's the request?? You're not giving it a response. It will timeout if you don't give it a response.
//made http request. create a server and run the code with the request and response object. this code runs every time someone makes a request to localhost:8000
//callback includes request and response object
//request is chrome/CURL. response is from your server
var server = http.createServer((req, res)=>{
	// console.log(req.rawHeaders[1]);

	//What's the reponse? put it into writeHead.
	//writeHead takes a status code (200) and type of data you have
	//"plain"--> treat it like plain text
	//"Html" --> treat it like html
	res.writeHead(200,{'content-type':'text/html'});

	//Tells the browser that this is the end of the response. terminate the response. If you just have "res.write", it will still spin waiting for the rest of the response.
	//This writes to the HTTP request (cURL)
	res.end("<h1>Hello, Friend. This is YOUR node server.</h1>");
});

var port = 8000;
console.log("Server listening on port " +port+ " for connections...");
//Told server to listen to port 8000. go to localhost:8000 and you'll see the change in the cmd line
server.listen(port);