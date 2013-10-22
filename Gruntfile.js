module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      dev: {
        files: {'scripts/mytest.min.js':'scripts/mytest.js'}
      },
      prod: {
        files: {'scripts/mytestProd.min.js':'scripts/mytest.js'}
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('builddev',['uglify:dev']);
  grunt.registerTask('build',['uglify:prod']);

};