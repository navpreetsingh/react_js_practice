var gulp = require("gulp")
var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require("reactify");
// var react = require("gulp-react")
// var concat = require("gulp-concat")
// var coffee = require('gulp-coffee')
// var uglify = require('gulp-uglify');
// var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
// var del = require('del');

gulp.task("default", function() {
	// Create a Bundler - Executes the build
	var bundler = watchify(browserify({
		// Configuration properties
		entries: ["./src/app.jsx"], //Start with this file
		transform: [reactify], //Convert jsx to js
		extensions: [".jsx"],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file){
		if (file) gutil.log("Recompiling" + file);
		return bundler
			.bundle()
			.on("error", gutil.log.bind(gutil, "Browserify Error"))
			.pipe(source("main.js"))
			.pipe(gulp.dest("./"));
	};
	build()
	bundler.on("update", build)
	// return gulp.src("src/**")
	// 	.pipe(react())
	// 	.pipe(concat("application.js"))
	// 	.pipe(gulp.des t("./"))
});