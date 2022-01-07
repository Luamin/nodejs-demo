var net = require('net');

var option = {
    port: 6677,
    host: 'localhost'
}

var client = net.connect(option, function (){
    client.write([
        'GET / HTTP/1.1',
        'User-Agent: curl/7.26.0',
        'Host: www.baidu.com',
        'Accept: */*',
        '',
        ''
    ].join('\n'));
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});