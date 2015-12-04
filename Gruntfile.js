// Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig({
		connect: {
			server: {
				options: {
					base: './public',
					port: '4000',
					host: '*',
					livereload: true,
					open: true
				}
			}
		},
		clean: {
			build: {
				src: ['public/scripts', 'public/css']
			}
		},
		jshint: {
			scripts: {
		  	src: ['app/scripts/**.js']
			}
		},

		uglify: {
			scripts: {
				expand: true,
				cwd: 'app/scripts/',
				src: ['*.js', '**/*.js'],
				dest: 'public/scripts/',
				ext: '.min.js'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'app/css',
					src: ['**/*.scss'],
					dest: 'public/css',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			build: {
				files: {
					'public/css/style.min.css': 'public/css/style.css',
					'public/css/vendor/font-awesome.min.css': 'public/css/vendor/font-awesome/font-awesome.css',
					'public/css/vendor/owl.carousel.min.css': 'app/css/vendor/owl.carousel.css',
					'public/css/vendor/owl.transition.min.css': 'app/css/vendor/owl.transition.css',
					'public/css/vendor/mCustomScrollbar.min.css': 'app/css/vendor/mCustomScrollbar.css'
				}
			}
		},
		//haml: {
			//dist: {
				//files: [{
					//expand: true,
					//cwd: 'app/views',
					//src: ['**/*.haml'],
					//dest: 'public',
					//ext: '.html'
				//}]
			//}
		//},

		jade: {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files: [ {
					cwd: "app/views",
					src: "**/*.jade",
					dest: "public",
					expand: true,
					ext: ".html"
				} ]
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'app/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/images'
				}]
			}
		},
		watch: {
			options: {
				livereload: true,
				interval: 5007
			},
			scripts: {
				files: ['app/scripts/**'],
				task: ['clean', 'jshint:scripts', 'uglify']
			},
			styles: {
				files: ['app/css/**/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			haml: {
				files: ['app/views/**/*.jade'],
				tasks: ['jade']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('build', ['clean', 'sass', /*'haml',*/ 'jade', 'jshint', 'uglify', 'cssmin', 'imagemin']);
	grunt.registerTask('default', ['sass', 'jade', 'connect', 'watch']);
};