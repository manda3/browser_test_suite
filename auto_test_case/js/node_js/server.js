var http = require('http');
var querystring = require('querystring');

function processPost (request, response, callback ) {
	var queryData = "";
	if( typeof callback !== 'function' ){
		return null;
	}

	if( request.method == 'POST' ){
		request.on( 'data', function(data) {
			queryData += data;

			if( queryData.length > 1e6 ){
				queryData = "";
				response.writeHead( 413, {'Content-Type' : 'application/x-www-form-urlencoded' }).end();
				request.connetion.destroy();
			}
		});

		request.on( 'end', function  () {
			response.post = querystring.parse( queryData );
			callback();
		});
	}
	else{
		response.writeHead( 405, {'Content-Type' : 'application/x-www-form-urlencoded'} );
		response.end();
	}
}


http.createServer( function  (request, response) {
	if( request.method == "POST" ){
		processPost( request, response, function  () {
			console.log( response.post );
			//response.writeHead( 200, "OK", {'Content-Type': 'application/x-www-form-urlencoded'} );
			response.writeHead( 200, "OK", {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin' : '*'} );
			response.end();
		});
	}
	else{
		//response.writeHead( 200, "OK", {'Content-Type' : 'application/x-www-form-urlencoded'} );
		response.writeHead( 200, "OK", {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin' : '*'} );
		response.end();
	}
}).listen(8888);
