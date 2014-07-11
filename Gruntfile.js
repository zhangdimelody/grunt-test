module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			options:{
				banner:"/*<%= pkg.name %>*/"
			},
			build:{
				src : 'src/*.js',
				dest : 'dest/index.js'
			}
		}
		,connect: {
			server: {
				options: {
					hostname: 'localhost'
					// ,port: 8000
					,base: 'app'
					,open: 'http://localhost:8000'
				}
			}
		}		
	});
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['uglify', 'connect']);

	require('load-grunt-tasks')(grunt);
}