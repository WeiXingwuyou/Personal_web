const gulp = require('gulp')
const minifycss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cssnano = require('gulp-cssnano')
const htmlclean = require('gulp-htmlclean')
const del = require('del')
const babel = require('gulp-babel')
const autoprefixer = require('gulp-autoprefixer')
const connect = require('gulp-connect')
const pug = require('gulp-pug')
const less = require('gulp-less')
const fs = require('fs')
const marked = require('marked')

const config = require('./config.json')

gulp.task('clean', function () {
	return del(['./dist/css/', './dist/js/'])
})

gulp.task('css', function () {
	return gulp
	.src('./src/css/*.less')
	.pipe(less().on('error', function(err) {
		console.log(err);
		this.emit('end');
	}))
	.pipe(minifycss({ compatibility: 'ie8' }))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
	.pipe(cssnano({ reduceIdents: false }))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('css-pics', function () {
	return gulp
		.src('./src/css/pics/*.less')
		.pipe(less().on('error', function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(minifycss({ compatibility: 'ie8' }))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
		.pipe(cssnano({ reduceIdents: false }))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('css-about', function () {
	return gulp
		.src('./src/css/about/*.less')
		.pipe(less().on('error', function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(minifycss({ compatibility: 'ie8' }))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
		.pipe(cssnano({ reduceIdents: false }))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('css-projects', function () {
	return gulp
		.src('./src/css/projects/*.less')
		.pipe(less().on('error', function(err) {
			console.log(err);
			this.emit('end');
		}))
		.pipe(minifycss({ compatibility: 'ie8' }))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 version'] }))
		.pipe(cssnano({ reduceIdents: false }))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('html', function () {
	return gulp
		.src('./dist/index.html')
		.pipe(htmlclean())
		.pipe(htmlmin())
		.pipe(gulp.dest('./dist'))
})

gulp.task('js', function () {
	return gulp
		.src(['./src/js/*.js', '!./src/js/projects.js'])
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('js-projects', function () {
	return gulp
		.src('./src/js/projects.js')
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('pug', function () {
	return gulp
		.src('./src/index.pug')
		.pipe(pug({ data: config }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('pug-pics', function () {
	const picsConfig = require('./pics.json');
	return gulp
		.src('./src/pics.pug')
		.pipe(pug({ data: { ...config, ...picsConfig } }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('pug-about', function () {
	const aboutContent = marked.parse(fs.readFileSync('./about.md', 'utf-8'));
	return gulp
		.src('./src/about.pug')
		.pipe(pug({ data: { ...config, aboutContent } }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('pug-projects', function () {
	const projectsConfig = require('./projects.json');
	return gulp
		.src('./src/projects.pug')
		.pipe(pug({ data: { ...config, ...projectsConfig } }))
		.pipe(gulp.dest('./dist'))
})

gulp.task('assets', function () {
	return gulp
		.src(['./src/assets/**/*'])
		.pipe(gulp.dest('./dist/assets'));
})

gulp.task('build', gulp.series('clean', 'assets', 'pug', 'pug-pics', 'pug-about', 'pug-projects', 'css', 'css-pics', 'css-about', 'css-projects', 'js', 'js-projects', 'html'))
gulp.task('default', gulp.series('build'))

gulp.task('watch', function () {
	gulp.watch('./src/components/*.pug', gulp.parallel('pug'))
	gulp.watch('./src/index.pug', gulp.parallel('pug'))
	gulp.watch('./src/css/**/*.scss', gulp.parallel(['css']))
	gulp.watch('./src/js/*.js', gulp.parallel(['js']))
	gulp.watch('./about.md', gulp.parallel('pug-about'))
	gulp.watch('./projects.json', gulp.parallel('pug-projects'))
	connect.server({
		root: 'dist',
		livereload: true,
		port: 10080,
		host: '0.0.0.0'
	})
})
