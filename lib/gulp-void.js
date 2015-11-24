// Deps
var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;


// Const
const PLUGIN_NAME = 'gulp-void';


// Plugin level function (dealing with files)
function gulpVoid(fn, done, memo) {
    if (!fn instanceof Function) throw new PluginError('gulp-reduce-file', 'Missing iterator callback for gulp-reduce-file');
    if (!done instanceof Function) throw new PluginError('gulp-reduce-file', 'Missing done callback for gulp-reduce-file');

    result = result || '';

    function iterate(file) {
        result = fn(file, memo);
    }

    function end() {
        var content = done(memo),
            target = new File();

        if (typeof content === 'string') content = new Buffer(content);
        if (!(content instanceof Buffer)) content = new Buffer(JSON.stringify(content, null, 2));

        target.path = filename;
        target.contents = content;


        this.emit('data', target);
        this.emit('end');
    }

    return through(iterate, end);

}

// Export for use
module.exports = gulpVoid;