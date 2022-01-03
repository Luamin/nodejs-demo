var fs = require('fs');

function copy(dst, src){
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(args){
    copy(args[0], args[1]);
}

main(process.argv.slice(2));
