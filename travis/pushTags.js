require('shelljs/global');
var version = 'v' + require('../package.json').version;
console.log('Package version:', version);
exec('git tag -a ' + version  + ' -m "Release ' + version + '[ci skip]";');
exec('git tag');
exec('git push --follow-tags;');