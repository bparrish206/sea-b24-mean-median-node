'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    sass:{
      compile: {
        files: {
          'app/css/main.css':'app/scss/main.scss'
        }
      }
    },

    jshint: {
      all: ['lib/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'lib/**/*.js',
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/mean_median_mode_tests.js']
    },

    clean: {
      sre: ['build/']
    },

    copy: {
      dev:{
        cwd: 'app/',
        expand: true,
        src: ['**/*.html', 'css/**/*.css'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src:['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/angular_testbundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

      karma: {
        unit: {
          configFile: 'karma.config.js'
        },

        continuous: {
          configFile: 'karma.config.js',
          singleRun: false,
          browsers: ['PhantomJS']
        }
      }
  });
  grunt.registerTask('build', ['sass', 'jshint', 'clean', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('default', ['test']);
};
