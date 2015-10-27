
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
            "standalone": "UI",
            "debug": true
          }
        },
        files: {
          "./dist/jibe.ui.components.js": ["./components/index.js"]
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          compress: true
        },
        files: {
          'dist/jibe.ui.components.min.js': ['dist/jibe.ui.components.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["build"]);
  grunt.registerTask("build", ["browserify", "uglify"]);
};
