/*
 * grunt-wp-svn
 * https://github.com/axisthemes/grunt-wp-svn
 *
 * Copyright (c) 2014 AxisThemes
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project Configuration.
	grunt.initConfig({

		// Validate files with JSHint.
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		wpsvn: {
			options: {
				svn_user: 'axisthemes',
				deploy_dir: 'deploy',
				assets_dir: 'deploy/assets',
			},
			plugin: {
				options: {
					plugin_slug: 'woocommerce-esewa'
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask( 'test', ['clean', 'wpsvn', 'nodeunit'] );

	// Register default task.
	grunt.registerTask( 'default', ['jshint', 'test'] );
};