//Include the HTTP module. It's part of the core, so no npm install needed.
var http = require("http");

//Include the fs module. FS = file system. It is part of core.
var fs = require("fs");


function renderHomePage(req, res){
	//Pass req and res to make sure res isn't undefined
	res.writeHead(200,{'content-type':'text/html'});
	//"Go and read the file from Sync called homePage.html"
	//You're not sending the file! You read the file and then send the contents along
	var theHomePageHTML = fs.readFileSync('homePage.html');
	res.end(theHomePageHTML);


	//The manual way without FS below......:
	//Someone came to our home page! Give them the homepage content.
	// res.write('<h1>This is the home page.</h1>');
	// res.write('<p>I\'m very proud of my node routing ability.</p>');
	// res.write('<p>I made a page in node. So there.</p>');
	// res.end();
};

//Set up an http server and store it in the server var.
//The callback will run anytime someone hits the port the server is listening on
var server = http.createServer((req, res)=>{
	//This function is run every time someone makes an HTTP request to this server.
	console.log("Someone connected to our server");

	//The url requested is in the req object, url property.
	console.log(req.url);


	if(req.url === '/'){
		//Cut code that was originally here and put it into a function called renderHomePage. Here, we'll just call that function with all that code.
		//need to put req, and res here and pass it into the function as well. Otherwise, res will be undefined or it does not exist..
		renderHomePage(req, res);
	}else if(req.url === '/logo.png'){
		//The request is for an image. Serve it up.
		var img = fs.readFileSync('logo.png');
		res.writeHead(200,{'content-type' : 'image/png'});
		res.end(img);
	}else{
		res.writeHead(404,{'content-type':'text/html'});
		res.end("Sorry, this page does not exist.");
	}

	//res.end will close the connection so the browser knows we are done
	// res.end("Sanity check");
});

//Tell the server we created to listen to port 8001
//Whenever anyone makes an HTTP request to this computer on port 8001, the callback will fire
server.listen(8001);
console.log("Server is listening for HTTP traffic at port 8001....");