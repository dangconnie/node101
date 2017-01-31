// Make a basic wikipedia page(s) that handles:
// 200 (serve up the page)
// 404 (make a custom page... search the web for this)
// 403 (make a path that is always off-limits)
// 400 (a api path. Alert the user they are missing an api key)
// Serve up CSS (research mime type if neccessary)
// Serve a JS file

var http = require("http");

var server = http.createServer((req,res)=>{
	if(req.url === '/'){
		
	}
});