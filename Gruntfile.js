module.exports = function (grunt) {

    // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      /* watch and see if our template files change */
      templates: {
        files: ['js/modules/*.js'],
        tasks: ['concat:js']
      }
    },

    concat: {
      js: {
        src : [
          'node_modules/jquery/dist/jquery.js',
          'node_modules/velocity-animate/velocity.js',
          'node_modules/velocity-animate/velocity.ui.js',
          'js/modules/*'
        ],
        dest: 'js/dist/application.js'
      }
    },

    uglify : {
      js: {
        files: {
          'js/dist/application.js' : [ 'js/dist/application.js' ]
        }
      }
    }
  });

  grunt.registerTask("default", ['concat:js', 'watch']);
  grunt.registerTask("build-dist", ['concat:js', 'uglify:js']);
};