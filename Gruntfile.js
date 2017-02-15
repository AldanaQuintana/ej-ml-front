module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochacli: {
      options: {
        bail: false
      },
      all: ['dist/**/*.js']
    },
    run: {
    compiletest: {
      cmd: 'npm',
      args: ['run-script', 'build_tests']
    },
    compileassets: {
      cmd: 'npm',
      args: ['run-script', 'build_assets']
    },
    compileapp: {
      cmd: 'npm',
      args: ['run-script', 'build_app']
    }
  }
  });

  // Load the plugin that provides the task(s).
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-run');

  // Default task(s).
  grunt.registerTask('test', ['run:compileassets', 'run:compileapp', 'run:compiletest', 'mochacli']);
};