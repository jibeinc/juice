require('shelljs/global');
var version = 'v' + require('../package.json').version;
console.log('Package version:', version);
console.log(exec('git tag -a ' + version  + ' -m "Release ' + version + '";'));
console.log(exec('git push --quiet --tags;'));