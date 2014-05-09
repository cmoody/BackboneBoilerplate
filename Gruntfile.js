module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    connect: {
      options: {
        port: process.env.PORT || 8000,
        hostname: '0.0.0.0',
        base: 'build'
      },
      server: {
        options: {
          keepalive: true
        }
      },
      dev: {
        options: {
          keepalive: false
        }
      }
    },

    less: {
      development: {
        files: {
          "./build/css/app.css": "./src/css/app.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          "./build/css/app.css": "./src/css/app.less"
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          almond: true,
          keepBuildDir: true,
          baseUrl: "./src/js",
          include: ['main.js'],
          mainConfigFile: "./src/js/main.js",
          name: "vendor/almond/almond", // assumes a production build using almond
          out: "build/optimized.js",
          wrap: true
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: [
              'index.html',
              'config.xml',
              'assets/**/*',
              'js/**/*',
              '!css/**/*'
            ],
            dest: './build'
          }
        ]
      },
      build: {
        files: [
          {
            expand: true,
            cwd: './build',
            src: [
              '**/*'
            ],
            dest: './Cordova/www'
          }
        ]
      }
    },

    // Clean the build folder before
    clean: {
      build: ['./build'],
      cordova: ['./Cordova/www']
    },

    watch: {
      scripts: {
        files: ['./src/index.html', './src/js/**/*'],
        tasks: ['copy:main'],
        options: {
          livereload: true
        },
      },
      css: {
        files: ['./src/css/**/*'],
        tasks: ['less:development'],
        options: {
          livereload: true
        },
      },
      assets: {
        files: ['./src/assets/**/*'],
        tasks: ['copy:main'],
        options: {
          livereload: true
        }
      }
    },

    shell: {
        cordova: {
            command: 'cd Cordova && cordova build ios'
        }
    }

  });

  // Run Development
  grunt.registerTask('dev', [
    'clean:build',
    'less:development',
    'copy:main',
    'connect:dev',
    'watch'
  ]);

  // Build & Move to Cordova Folder
  grunt.registerTask('build', [
    'clean',
    'less:production',
    // requirejs
    // html conditional
    'copy',
    'shell:cordova'
  ]);

  // Run prod task and build ipa send to testflight
  grunt.registerTask('distribute', [
    'build',
    //'shell:ipa' // Run Xcode build command to generate ipa
    // testflight
  ]);

};
