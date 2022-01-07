var fs = require('fs');

function copy(dst, src){
    fs.writeFile(dst, fs.readFile(src));
}

function main(args){
    copy(args[0], args[1]);
}

main(process.argv.slice(2));
