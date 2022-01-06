var child_process = require('child_process');

var child = child_process.spawn('node', ['lib/process/child_process.js', 'hello']);

child.stdout.on('data', function (data) {
    console.log('stdout : ' + data);
});

child.stderr.on('data', function (data) {
    console.log('stderr : ' + data);
});

child.on('close', function(code){
    console.log('close : ' + code);
});

setTimeout(() => child.kill('SIGTERM'), 3000);