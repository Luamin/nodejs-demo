var http = require('http');

var options = {
    hostname: 'localhost',
    port: 6666,
    method: 'POST', 
    headers: {'Content-Type' : "application/json"},
};

var request = http.request(options, function(res) {
    var body = [];
    res.on('data', function (chunk) {
        body.push(chunk);
    });

    res.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});

request.write("this is a request");
request.end();