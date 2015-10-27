
module.exports = function (grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              loose: "all"
            }]
          ],
          browserifyOptions: {
            "standalone": "UI"
          }
        },
        files: {
          // if the source file has an extension of es6 then
          // we change the name of the source file accordingly.
          // The result file's extension is always .js
          "./dist/jibe.ui.components.js": ["./components/index.js"]
        }
      },
      watch: {
        scripts: {
          files: ["./modules/*.js"],
          tasks: ["browserify"]
        }
      }
     }
  });

  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("default", ["build"]);
  grunt.registerTask("build", ["browserify"]);
};
