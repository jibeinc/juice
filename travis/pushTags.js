// or more concisely
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
var version = 'v' + require('../package.json').version;
exec('git tag -a' + version  + '-m "Release' + version + '"', puts);
exec('git push --quiet --tags;', puts);