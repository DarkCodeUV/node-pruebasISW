var http = require(`http`);

http.createServer( function(request, response){
    response.writeHead(200,
        {
	    "Content = Type": "text/plain"
	}
    );

response.write("hola mundo server ...");
response.end();
}).listen(8080);

console.log(`Server running on por 8080`);
