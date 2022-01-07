console.log(process.argv.slice(2))

process.on('SIGTERM', function () {
    console.log('Bye Bye');
    process.exit(1);
});