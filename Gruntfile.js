module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        release: {
            options: {
                file: 'bower.json',
                npm: false
            }
        },
        mocha_html: {
            all: {
                src   : [ 'EventEmitter.js' ],
                test  : [ 'test/*-test.js' ],
                assert : 'chai'
            }
        },
        koko: {
            test: {
                openPath: 'test/all.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-mocha-html');
    grunt.loadNpmTasks('grunt-koko');
    grunt.registerTask('test', ['mocha_html', 'koko:test']);
    grunt.registerTask('default', ['release:patch']);
};