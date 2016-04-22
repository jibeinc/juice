require('shelljs/global');
var version = 'v' + require('../package.json').version;
console.log('Package version:', version);
exec('git commit -m "Build ' + version + ' [skip build]"');
exec('git tag -a ' + version  + ' -m "Release ' + version + '";');
exec('git tag');
exec('git push --follow-tags;');