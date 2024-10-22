module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Compile LESS files to CSS
        less: {
            development: {
                files: {
                    "dist/css/configure.css": "source/less/configure.less",
                    'dist/css/style.css': 'source/less/style.less',
                    "dist/css/login.css": "source/less/login.less",
                    "dist/css/home.css": "source/less/home.less"
                }
            }
        },
        // Compress images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/image/',
                    src: ['**/*.{png,jpg,gif,webp}'], 
                    dest: 'dist/img/'
                }]
            }
        },
        // Compress JS
        uglify: {
            my_target: {
                files: {
                    "dist/js/login.min.js": ["source/js/login.js"],
                    "dist/js/agenda.min.js": ["source/js/agenda.js"],
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'imagemin', 'uglify']);
};