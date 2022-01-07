#! /usr/local/bin/node

var argv = require("argv");
var echo = require("../lib/echo");

var parms = argv.run().targets;
echo(parms.join(" "));