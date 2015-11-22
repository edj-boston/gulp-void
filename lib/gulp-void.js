// Deps
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;


// Const
const PLUGIN_NAME = 'gulp-void';


// Plugin level function (dealing with files)
function gulpVoid(options) {

    // Creating a stream through which each file will pass
    return through.obj(function(file, enc, cb) {

        if (file.isNull()) return cb(null, file);

        if (file.isBuffer()) {
            // Do something
        }

        if (file.isStream()) {
            // Do something
        }

        cb(null, file);

    });

}

// Export for use
module.exports = gulpVoid;