// Make a basic wikipedia page(s) that handles:
// 200 (serve up the page)
// 404 (make a custom page... search the web for this)
// 403 (make a path that is always off-limits)
// 400 (a api path. Alert the user they are missing an api key)
// Serve up CSS (research mime type if neccessary)
// Serve a JS file

var http = require("http");
var fs = require('fs');


//200 status code (similar for all codes)
function renderHomePage(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	var makeHTML = fs.readFileSync('renderHomePage.html');
	res.end(makeHTML);
};
//404 status code (error)
//403 status code (off limits)
//400 status code (api path. missing api key)
//CSS
//JS

var server = http.createServer((req,res)=>{
	if(req.url === '/'){
		//This is when the status code is 200. Valid request.
		renderHomePage(req,res);
	}else if(req.url === '/secret'){
		//This is when the status code is 403. Off limits page.
		var kittenBowl = 'kittenBowl.jpeg';
		res.writeHead(403,{'content-type':'img/jpg'});
		res.end("This is Area 51 but here's a cat: " + kittenBowl);
	}else if(req.url === '/api'){
		//This is when the status code is 400 for missing api key.
		res.writeHead(400,{'content-type':'text/html'});
		res.end("You're missing the API key. Give it.");
	}else if(req.url === '/scripts.js'){
		//This is to serve up JS files.
		res.writeHead(200,{'content-type':'text/javascript'});
		res.end(jsFile);
	}else if(req.url === '/styles.css'){
		//This is to serve up CSS files.
		res.writeHead(200,{'content-type':'text/css'});
		res.end(cssFile);
	}else{
		//This is when the status code is 400
		var img404 = fs.readFileSync('404cat.jpg');
		res.writeHead(404,{'content-type':'img/jpg'});
		res.end(img404);
	}
});

server.listen(8001);
console.log("listening for traffic...");