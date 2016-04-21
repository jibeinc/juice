require('shelljs/global');
var version = 'v' + require('../package.json').version;
console.log('Package version:', version);
echo('Echo version: ' + version);
exec('git tag -a ' + version  + ' -m "Release ' + version + '";');
exec('git push --quiet --tags;');