Gulp Void [![Build Status](https://travis-ci.org/edj-boston/gulp-void.svg?branch=master)](https://travis-ci.org/edj-boston/gulp-void) [![Dependency Status](https://david-dm.org/edj-boston/gulp-void.svg)](https://david-dm.org/edj-boston/gulp-void) [![devDependency Status](https://david-dm.org/edj-boston/gulp-void/dev-status.svg)](https://david-dm.org/edj-boston/gulp-void#info=devDependencies)
=========

A Gulp-compatible wrapper around Void, which intelligently invalidates your AWS CloudFront cache.

Install
-------

Install the module using NPM.

```sh
$ npm install --save
```

Follow the [installation instructions](https://github.com/edj-boston/void) in the vanilla Void module README regarding environment variables.

Usage
---

Navigate to the git repo directory and run the default `gulp` task:

```js
var gulpVoid = require('gulp-void');

gulp.task('invalidate', function() {
	gulp.src('build/static')
		.pipe(gulpVoid());
});
```

Then navigate to `https://localhost:3000` in your browser. Editing files in the `assets` directory will automatically trigger a rebuild. Check terminal output for errors and restart as necessary.