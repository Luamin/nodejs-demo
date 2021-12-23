var count1 = require('./util/counter');
var count2 = require('./util/counter');

function count() {
    console.log(count1.count());
    console.log(count2.count());
}

exports.count = count;
