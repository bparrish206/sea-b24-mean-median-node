'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
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
      src: ['test/**/*.js']
    },

    test: {
      src: ['test/client/**/*.js'],
      dest: 'test/angular_testbundle.js',
      options: {
        transform: ['debowerify']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      },
      continuous: {
        configFile: 'karma.config.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },

    clean: {
      sre: ['build/']
    },

    copy: {
      dev:{
        cwd: 'app/',
        expand: true,
        src: ['**/*.html'],
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
      }
    }
  });
  grunt.registerTask('build', ['jshint', 'clean', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('default', ['test']);
};
